"use client";
import { useState, useEffect } from "react";

export function useResponsive() {
	const [isPhone, setIsPhone] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setIsPhone(width < 540);
			setIsMobile(width < 768);
			setIsTablet(width < 1024);
			setIsDesktop(width > 1024);
		};

		handleResize(); // Check initial
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return { isPhone, isMobile, isTablet, isDesktop };
}
