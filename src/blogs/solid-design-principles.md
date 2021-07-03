---
title: SOLID Design Principles
slug: solid-design-principles
feature: true
date: 2021-07-02T00:00:00+00:00
featuredImage: ../images/solid.png
---

SOLID is one of the most popular sets of design principles in object-oriented software development. It’s a mnemonic acronym for the following five design principles:

S - Single Responsibility Principle<br />
O - Open/Closed Principle<br />
L - Liskov Substitution Principle<br />
I - Interface Segregation Principle<br />
D - Dependency Inversion<br />

## Single Responsibility Principle (SRP)

A class should have just a single reason to change. A single class should have one primary responsibility instead of taking on a lots and lots of different responsibilities.

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
