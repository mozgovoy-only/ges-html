import Component, { ComponentProps } from '@/base/component';

type BlockTeamOptions = {

}

export default class BlockTeam extends Component<HTMLElement, BlockTeamOptions> {
    constructor(element: ComponentProps<HTMLElement>) {
        super(element);
    }

    destroy() {
        // Destroy function
    }
}
