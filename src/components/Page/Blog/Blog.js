import React from "react";

const Blog = () => {
  return (
    <div className="container py-5">
      <div className="my-5">
        <h2 className="mb-4">Difference between javascript and nodejs?</h2>
        <p>
          JavaScript is a programming language that runs in any browser
          JavaScript Engine. Whereas Node JS is an interpreter or running
          environment for a JavaScript programming language
        </p>

        <p>
          JavaScript is normally used for any client-side activity for one web
          application. Whereas Node JS mainly used for accessing or running any
          operating system for non-blocking operation.
        </p>

        <p>
          JavaScript running in any engine like Spider monkey (FireFox),
          JavaScript Core (Safari), V8 (Google Chrome). Whereas Node JS only
          support the V8 engine, which googles chrome specific.
        </p>
      </div>

      <div className="my-5">
        <h2 className="mb-4">
          When should you use nodejs and when should you use mongodb?
        </h2>
        <p>
          Any project needs a programming environment and a runtime library that
          offers basic programming tools/support and can compile and/or
          interpret code. Nodejs is such as tool for the Javascript programming
          language. So, if we want to write some kind of stand-alone program or
          server in Javascript, then we can use nodejs for it.
        </p>

        <p>
          If application needs the ability to persistently store data in a way
          that you can efficiently query or update it later, then you would
          typically use some form of database. NoSQL databases like MongoDB are
          a good choice when your data is document-centric and doesn’t fit well
          into the schema of a relational database, when you need to accommodate
          massive scale, when you are rapidly prototyping, and a few other use
          cases.
        </p>
      </div>

      <div className="my-5">
        <h2 className="mb-4">Differences between sql and nosql databases? </h2>
        <p>SQL databases are relational, NoSQL databases are non-relational.</p>

        <p>
          SQL databases use structured query language and have a predefined
          schema. NoSQL databases have dynamic schemas for unstructured data.
        </p>
        <p>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
        </p>
        <p>
          SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores.
        </p>
        <p>
          SQL databases are better for multi-row transactions, while NoSQL is
          better for unstructured data like documents or JSON.
        </p>
      </div>
    </div>
  );
};

export default Blog;
