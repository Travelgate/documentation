"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["94304"],{56595:function(e,s,i){i.r(s),i.d(s,{frontMatter:()=>l,toc:()=>u,default:()=>p,metadata:()=>n,assets:()=>d,contentTitle:()=>o});var n=JSON.parse('{"id":"apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses","title":"Get Accesses","description":"The allAccesses query provides you with all your available accesses and their basic information. Remember that an access is the set of credentials and authentication configuration that enables a Buyer to connect to a Seller.","source":"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses.mdx","sourceDirName":"apis/for-buyers/hotel-x-pull-buyers-api/admin","slug":"/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses","draft":false,"unlisted":false,"editUrl":"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/overview"},"next":{"title":"Overview","permalink":"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/overview"}}'),c=i(85893),t=i(50065);let r=`{
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
}`,a=`{
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
  }`,l={sidebar_position:3},o="Get Accesses",d={},u=[{value:"Simple Accesses Request",id:"simple-accesses-request",level:3},{value:"Advanced Accesses Request",id:"advanced-accesses-request",level:3}];function h(e){let s={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{GraphqlSample:i}=s;return i||function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.header,{children:(0,c.jsx)(s.h1,{id:"get-accesses",children:"Get Accesses"})}),"\n",(0,c.jsxs)(s.p,{children:["The ",(0,c.jsx)(s.code,{children:"allAccesses"})," query provides you with all your available accesses and their basic information. Remember that an ",(0,c.jsx)(s.code,{children:"access"})," is the set of credentials and authentication configuration that enables a Buyer to connect to a Seller."]}),"\n",(0,c.jsx)(s.h3,{id:"simple-accesses-request",children:"Simple Accesses Request"}),"\n",(0,c.jsxs)(s.p,{children:["When performing a simple ",(0,c.jsx)(s.code,{children:"allAccesses"})," request, the following fields will be returned for all your accesses:"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"name"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"isActive"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"code"})}),"\n"]}),"\n",(0,c.jsx)(i,{query:r}),"\n",(0,c.jsx)(s.h3,{id:"advanced-accesses-request",children:"Advanced Accesses Request"}),"\n",(0,c.jsx)(s.p,{children:"If you want to obtain detailed information about each access, you can request additional fields, allowing you to access the parameters contained within each access."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"name"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"isActive"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"code"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"supplier"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"isTest"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"user"})}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"password"})," (To retrieve this field, ADMIN permissions are required.  Otherwise, the value will be null.)"]}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"urls"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.code,{children:"parameters"})}),"\n"]}),"\n",(0,c.jsx)(i,{query:a})]})}function p(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},50065:function(e,s,i){i.d(s,{Z:()=>a,a:()=>r});var n=i(67294);let c={},t=n.createContext(c);function r(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);