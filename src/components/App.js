import React from "react"
import Application from "./Application"
import { StaticQuery, graphql } from "gatsby"

// App is a wrapper around full Application, so we can pass
// data from static query as prop

const App = () => (
  <StaticQuery
    query={graphql`
      query SiteTermsQuery {
        allSiteTermsJson {
          edges {
            node {
              name
              description
              imagePre
              imagePost
              subtermsimple {
                name
                description
              }
              subtermlist {
                name
                ordered
                list {
                  description
                }
              }
              subtermlinks {
                name
                list {
                  name
                  url
                }
              }
              subtermgoogle {
                name
                list {
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="App">
        <Application data={data}/>
      </div>
    )}
  />
)

export default App
