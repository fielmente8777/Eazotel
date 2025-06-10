import React from 'react'

const Career = () => {
  React.useEffect(() => {
	// Inject stylesheet
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = 'https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css';
	link.type = 'text/css';
	document.head.appendChild(link);

	// Inject script
	const script = document.createElement('script');
	script.src = 'https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js';
	script.type = 'text/javascript';
	script.onload = () => {
	  if (window.rec_embed_js) {
		window.rec_embed_js.load({
		  widget_id: "rec_job_listing_div",
		  page_name: "Careers",
		  source: "CareerSite",
		  site: "https://eazotel.zohorecruit.in",
		  brand_color: "#6875E2",
		  empty_job_msg: "No current Openings"
		});
	  }
	};
	document.body.appendChild(script);

	// Cleanup
	return () => {
	  document.head.removeChild(link);
	  document.body.removeChild(script);
	};
  }, []);

  return (
	<div className="embed_jobs_head embed_jobs_with_style_3 my-36">
	  <div className="embed_jobs_head2">
		<div className="embed_jobs_head3">
		  <div id="rec_job_listing_div"></div>
		</div>
	  </div>
	</div>
  );
}

export default Career