import Component, { ComponentProps } from "@/base/component";
import Swiper from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
type SectionHeroMainOptions = {};

export default class SectionHeroMain extends Component<
    HTMLElement,
    SectionHeroMainOptions
> {
    slider: HTMLDivElement | null = null;
    instance: Swiper | null = null;
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
        this.init();
    }

    init() {
        this.slider = this.getElement("slider") as HTMLDivElement;
        this.instance = new Swiper(this.slider, {
            modules: [Navigation, Pagination, EffectFade, Autoplay],
            slidesPerView: 1,
            effect: 'fade',
            slideActiveClass: 'is-active',
            speed: 1200,
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: ".section-hero-main__control-pagination",
                type: "bullets",
                bulletActiveClass: 'is-active',
                renderBullet: function (index: number, className: string) {
                    return (
                        `<span class="section-hero-main__control-pagination-page ${className}">
                            <svg class="section-hero-main__control-pagination-icon" class width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle class="section-hero-main__control-pagination-icon-circle" style="animation-duration: 5000ms; animation-play-state: running;" cx="7" cy="7" r="6.75" stroke="white" stroke-width="0.5"/>
                            </svg>
                        </span>`
                    );
                },
            },
            navigation: {
                enabled: true,
                nextEl: ".section-hero-main__control-arrow--next",
                prevEl: ".section-hero-main__control-arrow--prev",
            },
            autoplay: {
                delay: 5000
            },
        });
    }
    destroy() {
        this.instance?.destroy();
    }
}
