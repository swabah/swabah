import { Education } from "@/components/portfolio/Education";
import { useEffect } from "react";

const EducationPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="pt-10 pb-16">
			<Education isPreview={false} />
		</div>
	);
};

export default EducationPage;
