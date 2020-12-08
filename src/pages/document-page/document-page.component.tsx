import React from "react";
import { useParams } from "react-router-dom";
import { TextAnnotator } from "react-text-annotate";
import GoBack from "./../../components/go-back/go-back.component";
import {
  DocumentPageBlock,
  DocumentPageContainer,
  DocumentPageContentSection,
  DocumentPageHeading,
  DocumentPageContent,
  DocumentPageAnnotationBlock,
  DocumentPageMetadata,
  StyledState,
  BackWrapper,
} from "./document-page.styles";

const DocumentPage = ({ data }: any) => {
  const { documentId }: any = useParams();
  const document = data.find((p: any) => p.id === Number(documentId));
  let documentData;

  if (document) {
    documentData = (
      <React.Fragment>
        <DocumentPageContainer>
          <DocumentPageBlock>
            <DocumentPageHeading>{document.title}</DocumentPageHeading>
            <DocumentPageMetadata>{document.metadata}</DocumentPageMetadata>
            <StyledState
              initial={{
                value: [
                  {
                    start: 28,
                    end: 55,
                    text: "consectetur adipiscing elit",
                    color: "yellow",
                  },
                  {
                    start: 283,
                    end: 301,
                    text: " velit esse cillum",
                    color: "yellow",
                  },
                  {
                    start: 335,
                    end: 358,
                    text: "Excepteur sint occaecat",
                    color: "yellow",
                  },
                ],
              }}>
              {({ state, setState }: any) => (
                <DocumentPageContentSection>
                  <DocumentPageContent>
                    <TextAnnotator
                      content={document.content}
                      value={state.value}
                      onChange={(value: any) => setState({ value })}
                      getSpan={(span) => ({
                        ...span,
                        color: "yellow",
                      })}
                    />
                  </DocumentPageContent>
                  <DocumentPageAnnotationBlock>
                    Current annontations:
                    {state.value.length > 0 ? (
                      state.value.map((annotation: any, index: any) => {
                        return <li key={index}>{annotation.text}</li>;
                      })
                    ) : (
                      <h3>No annotations</h3>
                    )}
                  </DocumentPageAnnotationBlock>
                </DocumentPageContentSection>
              )}
            </StyledState>
          </DocumentPageBlock>
        </DocumentPageContainer>
      </React.Fragment>
    );
  } else {
    documentData = <h2> Sorry. document doesn't exist </h2>;
  }

  return (
    <>
      <BackWrapper>
        <GoBack />
      </BackWrapper>
      <br />
      {documentData}
    </>
  );
};

export default DocumentPage;
