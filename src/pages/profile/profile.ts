import { Block } from '@/shared/utils/block';

export class Profile extends Block<{}> {
  constructor(props: { onClick: () => void }) {
    super({
      ...props,
      onClick: () => {
        console.log('click back btn');
      },
    });
  }

  protected render(): string {
    return `
      <main>
        {{{ BackButton onClick=onClick }}}
        <div class="container">
          <div class="inner-container">
            {{{ ProfileUserAvatar user-name="Ivan" }}}
            {{{ CommonSettingsList }}}
            {{{ ControllersSettingsList }}}
          </div>
        </div>
      </main>
      `;
  }
}
