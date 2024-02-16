import { changeAvatar } from '@/shared/services/user';
import { Block } from '@/shared/utils/block';

interface IProps {}

export class ProfileUserAvatar extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      handleChangeChangeAvatar: (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          const [avatar] = target.files;
          const formData = new FormData();
          formData.append('avatar', avatar);
          changeAvatar(formData);
        }
      },
    });
  }

  protected render(): string {
    return `
      <div>
        {{{ UserAvatar onChange=handleChangeChangeAvatar user=user }}}
        <h1 class="user-name">{{user.firstName}}</h1>
      </div>
      `;
  }
}
