import Component, { ComponentProps } from '@/base/component';

type CardTeamOptions = {

}

export default class CardTeam extends Component<HTMLElement, CardTeamOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
