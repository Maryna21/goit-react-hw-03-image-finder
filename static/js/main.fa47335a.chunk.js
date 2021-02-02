(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{31:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(8),s=a.n(o),i=(a(31),a(4)),l=a(5),u=a(7),m=a(6),h=a(10),g=(a(32),a(9),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchNameImg:""},e.handleNameChange=function(t){e.setState({searchNameImg:t.currentTarget.value.toLowerCase()})},e.hanleSubmit=function(t){if(t.preventDefault(),""===e.state.searchNameImg.trim())return h.b.warning("\u041f\u043e\u043b\u0435 \u043f\u043e\u0448\u0443\u043a\u0443 \u043f\u0443\u0441\u0442\u0435!");e.props.onSubmit(e.state.searchNameImg),e.setState({searchNameImg:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.hanleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",placeholder:"Search images and photos",onChange:this.handleNameChange})]})})}}]),a}(r.Component)),d=a(14);function j(e){var t=e.src,a=e.alt,r=e.toggleModal;return Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image",onClick:r})})}var b=a(13),p=a.n(b),f=a(23),O=a(11),v=a.n(O);v.a.defaults.baseURL="https://pixabay.com/api/",v.a.defaults.params={key:"19250465-3ecaba10f96f1a4c0424b71f3",image_type:"photo",orientation:"horizontal",per_page:12};var y={getImg:function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n,r,c=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,e.prev=1,e.next=4,v.a.get("",{params:{q:t,page:a}});case 4:return n=e.sent,r=n.data,e.abrupt("return",{hits:r.hits,totalHits:r.totalHits});case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",{hits:[],totalHits:0});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},x=a(24),I=a.n(x),S=document.querySelector("#modal-root"),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount")}},{key:"render",value:function(){return Object(o.createPortal)(Object(n.jsx)("div",{className:"Overlay",children:Object(n.jsx)("div",{className:"Modal",children:this.props.children})}),S)}}]),a}(r.Component),M=a(25);function w(e){return Object(M.a)(e),Object(n.jsx)(w,{type:"button",className:"Button",children:"Load more"})}var C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={status:"idle",error:null,images:[],showModal:!1,page:1,largeImg:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleClickImage=function(t){e.setState({largeImg:t}),e.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.searchNameImg,n=this.props.searchNameImg,r=t.page,c=this.state.page;a!==n&&(this.setState({images:[],page:1}),this.searchMoreImages(n,1)),r!==c&&c>1&&(this.searchMoreImages(n,c),console.log("error"))}},{key:"searchMoreImages",value:function(e,t){var a=this;this.setState({status:"pending"}),y.getImg(e,t).then((function(t){var n=t.images;if(0===t.totalHits)return a.setState({images:[],status:"reject"}),Promise.reject(new Error("This ".concat(e," not found")));a.setState((function(e){return{images:[].concat(Object(d.a)(e.images),Object(d.a)(n)),status:"resolved"}}))})).catch((function(e){return a.setState({error:e,status:"rejected"})})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.status,r=t.error,c=t.images,o=t.showModal,s=t.largeImg;return Object(n.jsxs)("div",{children:["idle"===a&&Object(n.jsx)("p",{children:"Write seach image name."}),Object(n.jsx)("ul",{className:"ImageGallery",children:c&&c.map((function(t){return Object(n.jsx)(j,{src:t.webformatURL,alt:t.tags,onClick:function(){e.handleClickImage(t.largeImageUrl)}},t.id)}))}),"rejected"===a&&Object(n.jsx)("p",{children:r.message}),"pending"===a&&Object(n.jsx)(I.a,{type:"Circles",color:"#00BFFF",height:100,width:100}),(c.length>0||"resolved"===a)&&Object(n.jsx)(w,{onLoadMore:this.loadMore}),o&&Object(n.jsx)(N,{onToggleModal:this.toggleModal,children:Object(n.jsx)("img",{src:s,alt:c.tags})})]})}}]),a}(r.Component),k=(a(73),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchNameImg:""},e.handleFormSubmil=function(t){e.setState({searchNameImg:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{onSubmit:this.handleFormSubmil}),Object(n.jsx)(h.a,{autoClose:3e3,position:"top-center"}),Object(n.jsx)(C,{searchNameImg:this.state.searchNameImg})]})}}]),a}(r.Component)),F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),F()},9:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.fa47335a.chunk.js.map