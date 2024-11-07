import Component, { ComponentProps } from "@/base/component";
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules'
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
            slidesPerView: 1,
            modules: [Navigation],
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
        });
    }

    destroy() {
        this.instance?.destroy();
    }
}
