import Component, { ComponentProps } from "@/base/component";
import Swiper from "swiper";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
type SectionHeroMainOptions = {};

export default class SectionHeroMain extends Component<
    HTMLElement,
    SectionHeroMainOptions
> {
    slider: HTMLElement | null = null;
    instance: Swiper | null = null;
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
        this.init();
    }

    init() {
        this.slider = this.getElement("slider") as HTMLDivElement;
        this.instance = new Swiper(this.slider, {
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            slidesPerView: 1,
            modules: [Navigation, Pagination, EffectFade],
            pagination: {
                el: ".section-hero-main__control-pagination",
                type: 'bullets',
                // renderBullet: function (index: number, className: string = 'section-hero-main__control-pagination-page') {
                //     return (
                //         '<button class="' +
                //         className +
                //         '">' +
                //         (index + 1) +
                //         "</button>"
                //     );
                // },
            },
            navigation: {
                enabled: true,
                nextEl: ".section-hero-main__control-arrow--next",
                prevEl: ".section-hero-main__control-arrow--prev",
            },
        });
    }
    destroy() {
        this.instance?.destroy();
    }
}
