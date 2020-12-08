import React, { useState } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import DocumentPage from "../document-page/document-page.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import { documentsSearchPageData } from "./document-search-page.data";
import { StyledLink } from "./document-search-page.styles";

const DocumentsSearchPage = () => {
  let match = useRouteMatch();

  const [input, setInput] = useState("");
  const [documentListDefault, setdocumentListDefault] = useState([]);
  const [documentList, setdocumentList] = useState([]);

  const updateInput = async (input: any) => {
    const filtered: any = documentListDefault.filter((document: any) => {
      return document.name.toLowerCase().includes(input.toLowerCase());
    });
    setdocumentList(documentsSearchPageData);
    setdocumentListDefault(documentsSearchPageData);
    setInput(input);
    setdocumentList(filtered);
  };

  const MyDocumentsList = ({ documentList = [] }: any) => {
    return (
      <>
        {documentList.map((data: any, index: any) => {
          if (data) {
            return (
              <StyledLink to={`${match.path}/${data.id}`} key={data.name}>
                <li>{data.name}</li>
              </StyledLink>
            );
          }
          return null;
        })}
      </>
    );
  };

  console.log(documentList);

  return (
    <Switch>
      <Route path={`${match.path}/:documentId`}>
        <DocumentPage data={documentsSearchPageData} />
      </Route>
      <Route path={`${match.path}/`}>
        <SearchBar keyword={input} setKeyword={updateInput} />
        <MyDocumentsList documentList={documentList} />
      </Route>
    </Switch>
  );
};

export default DocumentsSearchPage;
