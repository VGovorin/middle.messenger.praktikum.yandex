import { Block } from '@/shared/utils/block';

export class CommonSettingsList extends Block<{}> {
  protected render(): string {
    return `
      <ul class="list-item-wrapper">
        <li class="user-data-item">
          <p class="text user-data-description">Email</p>
          <p class="text user-data">{{user.email}}</p>
         </li> 
        <li class="user-data-item">
          <p class="text user-data-description">Login</p>
          <p class="text user-data">{{user.login}}</p>
         </li> 
        <li class="user-data-item">
          <p class="text user-data-description">First Name</p>
          <p class="text user-data">{{user.firstName}}</p>
         </li> 
        <li class="user-data-item">
          <p class="text user-data-description">Last Name</p>
          <p class="text user-data">{{user.secondName}}</p>
         </li> 
        <li class="user-data-item">
          <p class="text user-data-description">Display Name</p>
          <p class="text user-data">{{user.displayName}}</p>
         </li> 
        <li class="user-data-item">
          <p class="text user-data-description">Phone</p>
          <p class="text user-data">{{user.phone}}</p>
        </li> 
      </ul>
      `;
  }
}
