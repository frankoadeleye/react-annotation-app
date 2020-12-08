# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<!--


import React, { useState } from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import Document from "./../../pages/document-page/document-page.component";
import SearchBar from "./../search-bar/search-bar.component";

export const documentsData = [
  {
    id: 1,
    heading: "Document1",
    content: SearchBar,
  },
  {
    id: 2,
    heading: "Document2",
    content: SearchBar,
  },
  {
    id: 3,
    heading: "Document3",
    content: SearchBar,
  },
  {
    id: 4,
    heading: "Document4",
    content: SearchBar,
  },
  {
    id: 4,
    heading: "Document4",
    content: SearchBar,
  },
];

const Documents = () => {
  let match = useRouteMatch();
  const documents = documentsData.map((data) => {
    return (
      <Link to={`${match.path}/${data.id}`}>
        <li key={data.id}>{data.heading}</li>
      </Link>
    );
  });

  const [input, setInput] = useState("");
  const [documentListDefault, setdocumentListDefault] = useState([]);
  const [documentList, setdocumentList] = useState([]);

  const fetchData = async () => {
    return await fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setdocumentList(data);
        setdocumentListDefault(data);
      });
  };

  const updateInput = async (input: any) => {
    const filtered: any = documentListDefault.filter((document: any) => {
      return document.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setdocumentList(filtered);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  console.log(documentList);

  return (
    <Switch>
      <Route path={`${match.path}/:documentId`}>
        {/* <Document data={documentsData} /> */}
      </Route>
      <Route path={`${match.path}/`}>
        <SearchBar keyword={input} setKeyword={updateInput} />
         <MyDocumentsList documentList={documentList} />
      </Route>
    </Switch>
  );
};

const MyDocumentsList = ({ documentList = [] }: any) => {
  return (
    <>
      {documentList.map((data: any, index: any) => {
        if (data) {
          return (
            <div key={data.name}>
              <small>{data.name}</small>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default Documents;

 -->
