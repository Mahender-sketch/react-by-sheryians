import Card from "./components/card";
const app= () =>{
  const jobOpenings = [
  {
    brandLogo:"https://imgs.search.brave.com/k2-S1pIsJJWeoDgoAUhsAtERnbHDVnxX8Bvunk641Z8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjAv/MzAxLzkyMC9zbWFs/bC9nb29nbGUtbG9n/by1vbi1idXR0b24t/ZnJlZS1wbmcucG5n",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/1P_SOXWuEJUsako46K2jsvJPsjX3AEBkgmCIp9JznW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/ODUwLzg1OS9zbWFs/bC9hbWF6b24tbG9n/by1pY29uLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtZnJlZS1w/bmcucG5n",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/SDU0bLx4Y86W2yWQK9XyNcZ5YFkc_ecyXhCaBxBp-w4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbWlj/cm9zb2Z0LWxvZ28t/bW9kZXJuLWRlc2ln/bi05cjh0a3ZsYWZu/bnljY3R3LTIucG5n",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Java Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/vxxSF8W6QqdYS4MPk925un6gxKAN_Iw0f8P64uIPK9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2xv/YmVodWIvbG9iZS1p/Y29ucy9yZWZzL2hl/YWRzL21hc3Rlci9w/YWNrYWdlcy9zdGF0/aWMtcG5nL2xpZ2h0/L21ldGEtY29sb3Iu/cG5n",
    companyName: "Meta",
    datePosted: "10 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/C4BcN5I3d1dYWJi8yY7NncyB_8WVyGFVmU16CiRP7ko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbWFs/bGltZy5wbmdrZXku/Y29tL3BuZy9zbWFs/bC8xMTgtMTE4MDM0/NV8xMC1hcHItMjAx/NS1yb3VuZC1hcHBs/ZS1sb2dvLXBuZy5w/bmc",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/4e6Fdwnajr2GvciHYC1WZ9TGozTDRypB0ietqT2ha7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1Lzc5NC9zbWFs/bC9uZXRmbGl4LWxv/Z28tdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC1mcmVlLXBuZy5w/bmc",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/2AONrVn84CWKH4JZPqiYXl69X4OfF9Qc0onZ67MjlrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM2LzczNS9zbWFs/bC90ZXNsYS1sb2dv/LXRlc2xhLWljb24t/dHJhbnNwYXJlbnQt/cG5nLWZyZWUtdmVj/dG9yLmpwZw",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/OJzph6oWd1yKkdcO64E2geEGnxWj6EFIpVlX63M979M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGluZ2ZvcnVtLm9y/Zy93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8xMC9TcG90aWZ5/LWxvZ28tNTAweDI4/MS0xLnBuZw",
    companyName: "Spotify",
    datePosted: "2 days ago",
    post: "Web Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo:"https://imgs.search.brave.com/iJOKvrplGdVuGNU9gh9RFjJKjk8Q5c2dqEVQVllyb_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODYxLzY3MC9zbWFs/bC9hZG9iZS1leHBl/cmllbmNlLWNsb3Vk/LWxvZ28tZnJlZS1w/bmcucG5n",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/6a81JW_ZOjue0ckaa1HtguJj4WOdfK5lobx627tnsQM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWJtLmNvbS9icmFu/ZC9leHBlcmllbmNl/LWd1aWRlcy9kZXZl/bG9wZXIvOGY0ZTNj/YzJiNWQ1MjM1NGE2/ZDQzYzhlZGJhMWUz/YzkvMDJfOC1iYXIt/cmV2ZXJzZS5zdmc",
    companyName: "IBM",
    datePosted: "8 days ago",
    post: "Cloud Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$62/hr",
    location: "Mumbai, India"
  }
];
  return(<>
    <div className="parent">
         {jobOpenings.map(function(elem,idx){
          return<div key={idx}>
                      <Card 
                        brandLogo={elem.brandLogo}
                        company= {elem.companyName } 
                        date={elem.datePosted}
                        post={elem.post}
                        tag1={elem.tag1}
                        tag2={elem.tag2}
                        pay={elem.pay}
                        location={elem.location}
                        />
                  </div>
                }
              )
            }
    </div>
    </>
  )
}
export default app;