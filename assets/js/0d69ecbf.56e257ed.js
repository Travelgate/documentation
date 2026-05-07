"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["48969"],{53865(e,s,n){n.r(s),n.d(s,{metadata:()=>i,default:()=>p,frontMatter:()=>a,contentTitle:()=>d,toc:()=>u,assets:()=>o});var i=JSON.parse('{"id":"apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses","title":"Get Accesses","description":"The allAccesses query returns all Access configurations available in your organization.","source":"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses.mdx","sourceDirName":"apis/for-buyers/hotel-x-pull-buyers-api/admin","slug":"/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/overview"},"next":{"title":"Get Suppliers","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-suppliers"}}'),r=n(74848),c=n(28453);let l=`{
	admin {
		allAccesses {
			edges {
				node {
					accessData {
						name
						isActive
						code
					}
				}
			}
		}
	}
}`,t=`{
	admin{
	  allAccesses{
		edges{
		  node{
			accessData{
			  name
			  isActive
			  code
			  supplier{
				supplierData{
				  code
				  name
				  isActive
				  provider{
					code
					name
					isActive
				  }
				  context
				}
			  }
			  isTest
			  user
			  password
						  urls{
							  generic
							  search
							  quote
							  book
						  }
			  parameters{
				key
				value
			  }
			}
		  }
		}
	  }
	}
  }`,a={sidebar_position:3},d="Get Accesses",o={},u=[{value:"Query Overview",id:"query-overview",level:2},{value:"Simple Accesses Request",id:"simple-accesses-request",level:3},{value:"Advanced Accesses Request",id:"advanced-accesses-request",level:3},{value:"Response Considerations",id:"response-considerations",level:2}];function h(e){let s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components},{GraphqlSample:n}=s;return n||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"get-accesses",children:"Get Accesses"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"allAccesses"})," query returns all Access configurations available in your organization."]}),"\n",(0,r.jsxs)(s.p,{children:["An ",(0,r.jsx)(s.code,{children:"access"})," is the set of credentials and technical settings that lets a Buyer connect to a Seller in Hotel-X."]}),"\n",(0,r.jsx)(s.p,{children:"Use this endpoint when you need to:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Build an internal catalog of usable accesses"}),"\n",(0,r.jsx)(s.li,{children:"Validate if an access is active before executing Search/Quote/Book"}),"\n",(0,r.jsx)(s.li,{children:"Identify which supplier and credentials are currently configured"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"query-overview",children:"Query Overview"}),"\n",(0,r.jsxs)(s.p,{children:["Path: ",(0,r.jsx)(s.code,{children:"admin/get-accesses/"})]}),"\n",(0,r.jsx)(s.p,{children:"GraphQL root:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"admin {\n	allAccesses {\n		edges {\n			node {\n				accessData {\n					...\n				}\n			}\n		}\n	}\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:"The response is a connection, so you can read:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"edges"}),": list of accesses"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"totalCount"}),": total number of accesses in your organization"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"simple-accesses-request",children:"Simple Accesses Request"}),"\n",(0,r.jsx)(s.p,{children:"Use this version when you only need a lightweight inventory of configured accesses."}),"\n",(0,r.jsx)(s.p,{children:"Returned fields:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"name"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"isActive"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"code"})}),"\n"]}),"\n",(0,r.jsx)(n,{query:l}),"\n",(0,r.jsx)(s.h3,{id:"advanced-accesses-request",children:"Advanced Accesses Request"}),"\n",(0,r.jsx)(s.p,{children:"Use this version when you need integration-level details (credentials, supplier metadata, URLs and runtime parameters)."}),"\n",(0,r.jsx)(s.p,{children:"Returned fields:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"name"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"isActive"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"code"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"supplier"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"isTest"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"user"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"password"})," (To retrieve this field, ADMIN permissions are required.  Otherwise, the value will be null.)"]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"urls"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"parameters"})}),"\n"]}),"\n",(0,r.jsx)(n,{query:t}),"\n",(0,r.jsx)(s.h2,{id:"response-considerations",children:"Response Considerations"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"password"})," requires ADMIN permissions. Without those permissions, it is returned as ",(0,r.jsx)(s.code,{children:"null"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"supplier"})," helps you map each access to a specific Seller and ",(0,r.jsx)(s.code,{children:"context"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"parameters"})," may vary by Seller integration type."]}),"\n"]})]})}function p(e={}){let{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453(e,s,n){n.d(s,{R:()=>l,x:()=>t});var i=n(96540);let r={},c=i.createContext(r);function l(e){let s=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);