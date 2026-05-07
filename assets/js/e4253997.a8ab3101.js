"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["5012"],{79962(e,i,n){n.r(i),n.d(i,{metadata:()=>s,default:()=>p,frontMatter:()=>d,contentTitle:()=>t,toc:()=>c,assets:()=>a});var s=JSON.parse('{"id":"apis/for-buyers/hotel-x-pull-buyers-api/admin/get-api","title":"Get API by Code","description":"The api query in admin lets you retrieve one API definition by using a search filter.","source":"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-api.mdx","sourceDirName":"apis/for-buyers/hotel-x-pull-buyers-api/admin","slug":"/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-api","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-api","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-api.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Get Clients","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-clients"},"next":{"title":"Overview","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/overview"}}'),r=n(74848),o=n(28453);let l=`{
	admin {
		api(where: {searchBy: CODE, search: "hotel"}) {
			adviseMessage {
				code
				description
				level
			}
			apiData {
				code
				label
				errorCatalog {
					code
					description
					type
					level
				}
				operations {
					edges {
						node {
							operationData {
								code
								label
								types
							}
						}
					}
				}
			}
		}
	}
}`,d={sidebar_position:6},t="Get API by Code",a={},c=[{value:"Query Overview",id:"query-overview",level:2},{value:"API Request",id:"api-request",level:3},{value:"Response Considerations",id:"response-considerations",level:2}];function h(e){let i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{GraphqlSample:n}=i;return n||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"get-api-by-code",children:"Get API by Code"})}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"api"})," query in ",(0,r.jsx)(i.code,{children:"admin"})," lets you retrieve one API definition by using a search filter."]}),"\n",(0,r.jsx)(i.p,{children:"This is useful when you need to inspect:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["API metadata (",(0,r.jsx)(i.code,{children:"code"}),", ",(0,r.jsx)(i.code,{children:"label"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:["API-level advisories (",(0,r.jsx)(i.code,{children:"adviseMessage"}),")"]}),"\n",(0,r.jsx)(i.li,{children:"Error catalog and available operations for that API"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"query-overview",children:"Query Overview"}),"\n",(0,r.jsxs)(i.p,{children:["Path: ",(0,r.jsx)(i.code,{children:"admin/get-api/"})]}),"\n",(0,r.jsx)(i.p,{children:"GraphQL root:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-graphql",children:'admin {\n  api(where: {searchBy: CODE, search: "hotel"}) {\n    ...\n  }\n}\n'})}),"\n",(0,r.jsxs)(i.p,{children:["Unlike ",(0,r.jsx)(i.code,{children:"allAccesses"}),", ",(0,r.jsx)(i.code,{children:"allSuppliers"}),", and ",(0,r.jsx)(i.code,{children:"allClients"}),", this query returns a single ",(0,r.jsx)(i.code,{children:"api"})," node (not a connection)."]}),"\n",(0,r.jsx)(i.h3,{id:"api-request",children:"API Request"}),"\n",(0,r.jsx)(i.p,{children:"Returned fields:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"adviseMessage"})," (",(0,r.jsx)(i.code,{children:"code"}),", ",(0,r.jsx)(i.code,{children:"description"}),", ",(0,r.jsx)(i.code,{children:"level"}),")"]}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"apiData.code"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"apiData.label"})}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"apiData.errorCatalog"})," (",(0,r.jsx)(i.code,{children:"code"}),", ",(0,r.jsx)(i.code,{children:"description"}),", ",(0,r.jsx)(i.code,{children:"type"}),", ",(0,r.jsx)(i.code,{children:"level"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"apiData.operations.edges.node.operationData"})," (",(0,r.jsx)(i.code,{children:"code"}),", ",(0,r.jsx)(i.code,{children:"label"}),", ",(0,r.jsx)(i.code,{children:"types"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n,{query:l}),"\n",(0,r.jsx)(i.h2,{id:"response-considerations",children:"Response Considerations"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"searchBy: CODE"})," + ",(0,r.jsx)(i.code,{children:'search: "hotel"'})," filters the API by its code."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"errorCatalog"})," is useful for mapping business/technical errors expected for that API."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"operations"})," helps you discover which operation types are available before implementing flows."]}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453(e,i,n){n.d(i,{R:()=>l,x:()=>d});var s=n(96540);let r={},o=s.createContext(r);function l(e){let i=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);