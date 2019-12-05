import styled from "~/utils/styled"

export const BlogPostBodyHolder = styled.div``

export const TagsHolder = styled.div``

export const DateHolder = styled.p`
  font-size: 2rem;
  margin-bottom: 0.8em;
`

export const PostPageTemplateHeader = styled.h2`
  font-size: 4.8rem;
  margin: 0.8em 0;
`

export const BlogPostPageWrapper = styled.div`
  padding: 1.6rem;
  box-sizing: content-box;
  background-color: ${props => props.theme.bg.secondary};

  max-width: 700px;
  margin: 3.2rem auto;
`
