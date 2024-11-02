import { ITransitionData } from "@barba/core/dist/core/src/defs";
import Component from "@/base/component";
import SectionHero from "@/components/sections/section-hero/section-hero";
import SectionMain from "@/components/sections/section-main/section-main";
import SectionAbout from "@/components/sections/section-about/section-about";
import SectionStatus from "@/components/sections/section-status/section-status";
import SectionDocuments from "@/components/sections/section-documents/section-documents";
import SectionProjects from "@/components/sections/section-projects/section-projects";
import SectionHistory from "@/components/sections/section-history/section-history";
import SectionHeroSlider from "@/components/sections/section-hero-slider/section-hero-slider";
import SectionPressCenter from "@/components/sections/section-press-center/section-press-center";
import SectionContacts from "@/components/sections/section-contacts/section-contacts";
import SectionProjectsHero from "@/components/sections/section-projects-hero/section-projects-hero";
import SectionStages from "@/components/sections/section-stages/section-stages";
import BlockHeading from "@/components/blocks/block-heading/block-heading";
import BlockProjects from "@/components/blocks/block-projects/block-projects";
import BlockMedia from "@/components/blocks/block-media/block-media";
import BlockStatistic from "@/components/blocks/block-statistic/block-statistic";
import BlockSolution from "@/components/blocks/block-solution/block-solution";
import BlockRelation from "@/components/blocks/block-relation/block-relation";
import BlockTeam from "@/components/blocks/block-team/block-team";
import BlockEsg from "@/components/blocks/block-esg/block-esg";
import BlockContactsGeo from "@/components/blocks/block-contacts-geo/block-contacts-geo";
import BlockChips from "@/components/blocks/block-chips/block-chips";
import SliderGallery from "@/components/blocks/slider-gallery/slider-gallery";
import CardProjects from "@/components/blocks/card-projects/card-projects";
import CardMedia from "@/components/blocks/card-media/card-media";
import CardStatistic from "@/components/blocks/card-statistic/card-statistic";
import CardDocuments from "@/components/blocks/card-documents/card-documents";
import CardTeam from "@/components/blocks/card-team/card-team";
import CardPressCenter from "@/components/blocks/card-press-center/card-press-center";
import CardEvent from "@/components/blocks/card-event/card-event";
import CardStage from "@/components/blocks/card-stage/card-stage";
import CardAlbum from "@/components/blocks/card-album/card-album";
import CardNext from "@/components/blocks/card-next/card-next";
import GeoProjects from "@/components/blocks/geo-projects/geo-projects";
import RowSolution from "@/components/blocks/row-solution/row-solution";
import Slider from "@/components/blocks/slider/slider";
import TitleMain from "@/components/ui/title-main/title-main";
import ButtonMain from "@/components/ui/button-main/button-main";
import ButtonIcon from "@/components/ui/button-icon/button-icon";
import ButtonOffcut from "@/components/ui/button-offcut/button-offcut";
import TextIndent from "@/components/ui/text-indent/text-indent";
import TextLabel from "@/components/ui/text-label/text-label";
import SelectCustom from "@/components/ui/select-custom/select-custom";
import Chips from "@/components/ui/chips/chips";
import BackquoteCustom from "@/components/ui/backquote-custom/backquote-custom";
import Feedback from "@/components/blocks/feedback/feedback";
import Input from "@/components/ui/input/input";

// Набор всех компонентов, для которых будет применяться стандартная инициализация
const allComponents: Record<string, any & Component<HTMLElement>> = {
    "section-hero": SectionHero,
    "section-main": SectionMain,
    "section-about": SectionAbout,
    "section-status": SectionStatus,
    "section-documents": SectionDocuments,
    "section-projects": SectionProjects,
    "section-history": SectionHistory,
    "section-hero-slider": SectionHeroSlider,
    "section-press-center": SectionPressCenter,
    "section-contacts": SectionContacts,
    "section-projects-hero": SectionProjectsHero,
    "section-stages": SectionStages,
    "block-heading": BlockHeading,
    "block-projects": BlockProjects,
    "block-media": BlockMedia,
    "block-statistic": BlockStatistic,
    "block-solution": BlockSolution,
    "block-relation": BlockRelation,
    "block-team": BlockTeam,
    "block-esg": BlockEsg,
    "block-contacts-geo": BlockContactsGeo,
    "block-chips": BlockChips,
    "slider-gallery": SliderGallery,
    "card-projects": CardProjects,
    "card-media": CardMedia,
    "card-statistic": CardStatistic,
    "card-documents": CardDocuments,
    "card-team": CardTeam,
    "card-press-center": CardPressCenter,
    "card-event": CardEvent,
    "card-stage": CardStage,
    "card-album": CardAlbum,
    "card-next": CardNext,
    "geo-projects": GeoProjects,
    "row-solution": RowSolution,
    "slider": Slider,
    "title-main": TitleMain,
    "button-main": ButtonMain,
    "button-icon": ButtonIcon,
    "button-offcut": ButtonOffcut,
    "text-indent": TextIndent,
    "text-label": TextLabel,
    "select-custom": SelectCustom,
    'chips': Chips,
    "backquote-custom": BackquoteCustom,
    "feedback": Feedback,
    "input": Input
};

export default {
    namespace: "common",
    components: <Component<HTMLElement>[]>[],
    async beforeEnter({ next: { container, url } }: ITransitionData) {
        try {
            // Стандартная инициализация компонентов
            const existedComponents = Array.from(
                container.querySelectorAll<HTMLElement>("[data-component]")
            );

            this.components = existedComponents.map((component) => {
                try {
                    return new allComponents[component.dataset.component!]({
                        name: component.dataset.component,
                        component: component,
                    });
                } catch (e: any) {
                    console.error(
                        `Ошибка во время инициализации компонента: ${component.dataset.component}\n\n${e}`
                    );
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
                component.destroy();
            } catch (e: any) {
                console.error(
                    `Ошибка во время удаления компонента: ${component.nRootName}\n\n${e}`
                );
            }
        });
        this.components = [];
    },

    afterLeave() {},
};
