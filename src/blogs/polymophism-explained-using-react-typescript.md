---
title: Polymophism Explained Using React Typescript
slug: polymophism-explained-using-react-typescript
featured: true
date: 2022-02-10T00:00:00+00:00
featuredImage: ../images/react-typescript.jpg
---

## What is Polymorphism?

Polymorphism is one of the core concepts of object-oriented programming (OOP). Let's say it describes situations in which something occurs in several different forms. As a programmer, it hugely helps you to write highly re-useable clean code and IMO that's one of the key skills every programmer must have apart from problem-solving.

You can read about it the whole day but to get the gist of it you'll need to know when and why to use it. Let's start with an example that I commonly use.

### What we're building

In this example, I'll be using React and TypeScript to demonstrate a use case for polymorphism. Mind you the concept is not tied to JS, React, or TypeScript. Polymorphism is an OOP programming concept and not a language-specific thing.

We'll be creating a simple Map application. The task is to add both passenger and rider's geo-location marker on the map. Pretty easy right? I'm sure most of you have already done it. Let's get into it.

### Creating the app

Lets start by creating a Mappable interface.

```typescript
export interface Mappable {
  location: {
    coordinates: [number, number];
  };
}
```

Now let's create a passenger and rider interface as well.

```javascript
export interface Passenger extends Mappable {
  id: string;
  name: string;
  email: string;
}

export interface Rider extends Mappable {
  id: string;
  name: string;
  licensePlate: string;
}
```

Did you see what we did there? Instead of writing the location property in both Rider and Passenger. We created a separate **Mappable** interface which is inherited by both Rider and Passenger interface.

Now we know any interface that extends Mappable has coordinates property inside it which means its location can be added to Map.

### Create a Map Component

Creating a whole Map component might be more confusing to some readers who're not familiar with React or TypeScript. So I'll omit the complexities. Below, we have a Map component that will accept a prop of Mappable interface. So that it can add a location marker to Map using the coordinates. The component will return a Map with the marker added.

```javascript
interface Props {
  mappable: Mappable;
}

const Map = (props: Props): JSX.Element => {
    const {mappable} = props;

    addMarker(): void {
        const { coordinates } = mappable.location;
        // Add marker to the map using the coordinates - Omitted
    }
  // Create a Map and return it. - Omitted
};
```

The component itself is not important but what it is doing. Our Map component is accepting Mappable interface as a prop. If you come from other OOP languages, think of this as a method that accepts an argument of type Mappable. Here's a similar example in Java -

```java
class Map{
    void addMarker(Mappable mappable){
        // Add marker to map
    }
}
```

### Tying it all together

The tricky part is over. Now let's write a code to render the Map component.

```javascript
function ShowPassengerLocation(): JSX.Element{
    const passender: Passenger = {
        id: '123',
        name: 'Peter Parker',
        licensePlate: 'BEN XXX'
    }

    return (
        // Creates a Map with passender's location marked
        <Map mappable={passenger} />
    )
}

function ShowPassengerLocation(): JSX.Element{
    const rider: Rider = {
        id: '234',
        name: 'Tony Stark',
        licensePlate: 'LUV 400'
    }

    return (
        // Creates a Map with rider's location marked
        <Map mappable={rider}>
    )
}
```

Hope you enjoyed it. No worries even if you didn't. Programming takes practice, patience, and persistence. Happy coding :)
