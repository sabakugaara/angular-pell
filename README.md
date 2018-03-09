# angular-pell
Angular 5 component for pell WYSIWYG HTML Rich Text Editor. https://github.com/jaredreich/pell

## HowTo

### install

```
npm install angular-pell
```

### import `PellModule`

update `app.module.ts`:
```
import { PellModule } from 'angular-pell'

@NgModule({
  imports: [
    PellModule,
  ],
})
export class AppModule { }
```

### use it

```
<pell-editor></pell-editor>
```
