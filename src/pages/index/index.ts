import { ITransitionData } from '@barba/core/dist/core/src/defs';
import Component from '@/base/component';
import SectionHero from '@/components/sections/section-hero/section-hero';
import BlockHeroSlider from '@/components/blocks/block-hero-slider/block-hero-slider';
import SectionMain from '@/components/sections/section-main/section-main';
import BlockHeading from '@/components/blocks/block-heading/block-heading';
import TitleMain from '@/components/ui/title-main/title-main';
import ButtonMain from '@/components/ui/button-main/button-main';

// Набор всех компонентов, для которых будет применяться стандартная инициализация
const allComponents: Record<string, any & Component<HTMLElement>> = {
    'section-hero': SectionHero,
    'block-hero-slider': BlockHeroSlider,
    'section-main': SectionMain,
    'block-heading': BlockHeading,
    'title-main': TitleMain,
    'button-main': ButtonMain
};

export default {
    namespace: 'common',
    components: <Component<HTMLElement>[]>[],
    async beforeEnter({ next: { container, url } }: ITransitionData) {
        try {
            // Стандартная инициализация компонентов
            const existedComponents = Array.from(container.querySelectorAll<HTMLElement>('[data-component]'));

            this.components = existedComponents.map((component) => {
                try {
                    return new allComponents[component.dataset.component!]({
                        name: component.dataset.component,
                        component: component,
                    });
                } catch (e: any) {
                    console.error(`Ошибка во время инициализации компонента: ${component.dataset.component}\n\n${e}`);
                }
            });

            // Дополнительная логика для инициализации страницы
            // ...

        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {
        this.components.forEach((component) => {
            try {
                component.destroy()
            } catch (e: any) {
                console.error(`Ошибка во время удаления компонента: ${component.nRootName}\n\n${e}`);
            }
        })
        this.components = [];
    },

    afterLeave() {
    },
};
