 <ul>
  <li *ngFor='let product of products'>
    <a routerLink='/product/{{product.id}}' routerLinkActive='active'>{{product.albumName}}</a>
  </li>
</ul> 
