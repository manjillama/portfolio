---
title: SOLID Design Principles
slug: solid-design-principles
featured: true
date: 2021-07-02T00:00:00+00:00
featuredImage: ../images/solid.png
---

SOLID is one of the most popular sets of design principles in object-oriented software development. It’s a mnemonic acronym for the following five design principles:

**S** - Single Responsibility Principle<br />
**O** - Open/Closed Principle<br />
**L** - Liskov Substitution Principle<br />
**I** - Interface Segregation Principle<br />
**D** - Dependency Inversion<br />

---

## Single Responsibility Principle (SRP)

A class should have just a single reason to change. **A single class should have one primary responsibility instead of taking on a lots and lots of different responsibilities**.

For e.g. let make a simple Journal class. This class is going to store our most intimate thoughts. Features of the program should be able to

- Add new entry
- Remove entry
- Save entries to storage system
- Load/fetch entries from storage system

```java
/**
* BAD EXAMPLE
*/
class Journal {
    private final List<String> entries = new ArrayList<>();
    private static int count = 0;

    public void addEntry(String text) {
        entries.add("" + (++count) + ": " + text);
    }

    public void removeEntry(int index) {
        entries.remove(index);
    }

    @Override
    public String toString() {
        return String.join(System.lineSeparator(), entries);
    }


    public void saveToFile(String text, String filename, boolean overwrite) throws FileNotFoundException {
        // Omitted
    }


    public void loadFromFile(String filename) {
        // Omitted
    }
}
```

Essentially, the example above is a violation of the SRP because the Journal class has taken on addition concerns. We're not only adding and removing the entries from the Journal but also handling the persistence (saving and loading the file from storage system). Persistence here, is a separate concern.
Now what we can do is move the persistence concern to a whole new class in order to adhere to the SRP.

```java
/**
* GOOD EXAMPLE
*/
class Journal {
    private final List<String> entries = new ArrayList<>();
    // Total number of entries across however many journals we make
    private static int count = 0;

    public void addEntry(String text) {
        entries.add("" + (++count) + ": " + text);
    }

    public void removeEntry(int index) {
        entries.remove(index);
    }

    @Override
    public String toString() {
        return String.join(System.lineSeparator(), entries);
    }
}

class Persistence {
    public void saveToFile(String text, String filename, boolean overwrite) throws FileNotFoundException {
        if (overwrite || new File(filename).exists()) {
            try (PrintStream out = new PrintStream(filename)) {
                out.println(text);
            }
        }
    }

    // Omitted
    public void loadFromFile(String filename) {
    }
}

class App {
    public static void main(String[] args) throws Exception {
        Journal j = new Journal();
        j.addEntry("I cooked today");
        j.addEntry("I ran 4km");

        Persistence p = new Persistence();
        String filename = "journal.txt";
        p.saveToFile(j.toString(), filename, true);
    }
}
```

So the take away is that the single responsibility principle basically tries to force you to put just one responsibility into any single class. If you add more responsibilities you'll end up with god object which can be very unmanageable and very difficult to work and refactor later on.

---

## Open/Closed Principle (OCP)

It's now time for the O in SOLID, known as the open-closed principle. **Simply put, classes should be open for extension but closed for modification**. In doing so, we stop ourselves from modifying existing code and causing potential new bugs in an otherwise happy application.

**Of course, the one exception to the rule is when fixing bugs in existing code.**

Let's suppose you're building a program that will allow users to filter the products by a specific criteria i.e. `color`, `size`.

```java
/**
* BAD EXAMPLE
*/
enum Color {
  RED, GREEN, BLUE
}

enum Size {
  SMALL, MEDIUM, LARGE
}

class Product {
  public String name;
  public Color color;
  public Size size;

  public Product(String name, Color color, Size size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class ProductFilter {
  public Stream<Product> filterByColor(List<Product> products, Color color) {
    return products.stream().filter(p -> p.color == color);
  }

  public Stream<Product> filterBySize(List<Product> products, Size size) {
    return products.stream().filter(p -> p.size == size);
  }

  public Stream<Product> filterBySizeAndColor(List<Product> products, Size size, Color color) {
    return products.stream().filter(p -> p.size == size && p.color == color);
  }
  // state space explosion
  // 3 criteria = 7 methods
}

class App {
  public static void main(String[] args) {
    Product apple = new Product("Apple", Color.GREEN, Size.SMALL);
    Product tree = new Product("Tree", Color.GREEN, Size.LARGE);
    Product house = new Product("house", Color.BLUE, Size.LARGE);

    List<Product> products = List.of(apple, tree, house);

    ProductFilter pf = new ProductFilter();
    System.out.println("Green products");
    pf.filterByColor(products, Color.GREEN).forEach(p -> System.out.println(" - " + p.name + " is green"));
  }
}
```

Here, we're creating a three different methods each to filter using the different product criteria. The problem here is that this code is okay for two criteria but if we were to add single new criteria for e.g. `price`, we'll end up with **7 methods** to cover every **intersection** which can be very problematic. This, would be a violation of OCP since the whole point of the OCP is to be open for extension but closed for modification.

```java
/**
* GOOD EXAMPLE
*/
enum Color {
  RED, GREEN, BLUE
}

enum Size {
  SMALL, MEDIUM, LARGE
}

class Product {
  public String name;
  public Color color;
  public Size size;

  public Product(String name, Color color, Size size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

interface Specification<T> {
  boolean isSatisfied(T item);
}

interface Filter<T> {
  Stream<T> filter(List<T> items, Specification<T> spec);
}

class ColorSpecification implements Specification<Product> {
  private Color color;

  public ColorSpecification(Color color) {
    this.color = color;
  }

  @Override
  public boolean isSatisfied(Product p) {
    return p.color == color;
  }
}

class SizeSpecification implements Specification<Product> {
  private Size size;

  public SizeSpecification(Size size) {
    this.size = size;
  }

  @Override
  public boolean isSatisfied(Product p) {
    return p.size == size;
  }
}

/**
 * Combinator - combines two filters together
 */
class AndSpecification<T> implements Specification<T> {
  private Specification<T> first, second;

  public AndSpecification(Specification<T> first, Specification<T> second) {
    this.first = first;
    this.second = second;
  }

  @Override
  public boolean isSatisfied(T item) {
    return first.isSatisfied(item) && second.isSatisfied(item);
  }
}

class BetterFilter implements Filter<Product> {
  @Override
  public Stream<Product> filter(List<Product> items, Specification<Product> spec) {
    return items.stream().filter(p -> spec.isSatisfied(p));
  }
}

class App {
  public static void main(String[] args) {
    Product apple = new Product("Apple", Color.GREEN, Size.SMALL);
    Product tree = new Product("Tree", Color.GREEN, Size.LARGE);
    Product house = new Product("house", Color.BLUE, Size.LARGE);

    List<Product> products = List.of(apple, tree, house);

    BetterFilter bf = new BetterFilter();
    System.out.println("Green products:");
    bf.filter(products, new ColorSpecification(Color.GREEN))
        .forEach(p -> System.out.println(" - " + p.name + " is green"));

    System.out.println("Large blue items:");
        bf.filter(products, new AndSpecification<>(new ColorSpecification(Color.BLUE), new SizeSpecification(Size.LARGE)))
            .forEach(p -> System.out.println(" - " + p.name + " is large and blue"));
  }
}
```

Above code will yield the same output but the now upside is that if we want an additional specification, we don't need to jump into existing classes and modify them. Hence the take away is that we only have to use the inheritance and implementations of interfaces and at no point in time would we want to actually jump back into existing code and modify it to add new additional functionalities.
