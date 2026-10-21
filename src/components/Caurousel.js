import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function getStep(track) {
	const first = track && track.firstElementChild;
	if (!first) return 0;
	const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
	return first.getBoundingClientRect().width + gap;
}

function Carousel({
	children,
	perView = { base: 1, sm: 2, md: 3, lg: 4 },
	autoplay = true,
	interval = 3500,
	dots = true,
	arrows = false,
	gap = 20,
	className = '',
	label = 'carousel',
}) {
	const trackRef = useRef(null);
	const [paused, setPaused] = useState(false);
	const [active, setActive] = useState(0);
	const [pages, setPages] = useState(1);
	const slides = React.Children.toArray(children);

	const measure = useCallback(() => {
		const track = trackRef.current;
		if (!track) return;
		const step = getStep(track);
		if (!step) return;
		const visible = Math.max(1, Math.round(track.clientWidth / step));
		setPages(Math.max(1, slides.length - visible + 1));
	}, [slides.length]);

	useEffect(() => {
		measure();
		window.addEventListener('resize', measure);
		return () => window.removeEventListener('resize', measure);
	}, [measure]);

	const next = useCallback(() => {
		const track = trackRef.current;
		if (!track) return;
		const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
		if (atEnd) track.scrollTo({ left: 0, behavior: 'smooth' });
		else track.scrollBy({ left: getStep(track), behavior: 'smooth' });
	}, []);

	const prev = useCallback(() => {
		const track = trackRef.current;
		if (!track) return;
		if (track.scrollLeft <= 4)
			track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
		else track.scrollBy({ left: -getStep(track), behavior: 'smooth' });
	}, []);

	useEffect(() => {
		if (!autoplay || paused || pages <= 1) return undefined;
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		)
			return undefined;
		const id = setInterval(next, interval);
		return () => clearInterval(id);
	}, [autoplay, paused, pages, interval, next]);

	const onScroll = () => {
		const track = trackRef.current;
		const step = getStep(track);
		if (step)
			setActive(Math.min(pages - 1, Math.round(track.scrollLeft / step)));
	};

	const goTo = (i) => {
		const track = trackRef.current;
		if (track) track.scrollTo({ left: i * getStep(track), behavior: 'smooth' });
	};

	const vars = {
		'--gap': `${gap}px`,
		'--pv-base': perView.base ?? 1,
		'--pv-sm': perView.sm ?? perView.base ?? 1,
		'--pv-md': perView.md ?? perView.sm ?? perView.base ?? 1,
		'--pv-lg': perView.lg ?? perView.md ?? perView.sm ?? perView.base ?? 1,
	};

	return (
		<div
			className={`carousel ${className}`}
			style={vars}
			role="region"
			aria-roledescription="carousel"
			aria-label={label}
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			onFocus={() => setPaused(true)}
			onBlur={() => setPaused(false)}
			onTouchStart={() => setPaused(true)}
			onTouchEnd={() => setPaused(false)}>
			{arrows && pages > 1 && (
				<>
					<button
						type="button"
						className="carousel-arrow carousel-arrow--prev"
						onClick={prev}
						aria-label="Previous">
						<FaChevronLeft />
					</button>
					<button
						type="button"
						className="carousel-arrow carousel-arrow--next"
						onClick={next}
						aria-label="Next">
						<FaChevronRight />
					</button>
				</>
			)}

			<div
				className="carousel-track"
				ref={trackRef}
				onScroll={onScroll}>
				{slides.map((slide, i) => (
					<div
						className="carousel-slide"
						key={i}>
						{slide}
					</div>
				))}
			</div>

			{dots && pages > 1 && (
				<div className="carousel-dots">
					{Array.from({ length: pages }).map((_, i) => (
						<button
							type="button"
							key={i}
							className={i === active ? 'is-active' : ''}
							onClick={() => goTo(i)}
							aria-label={`Go to slide ${i + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Carousel;
