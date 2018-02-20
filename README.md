# angular-pell
Angular 2, Angular 4 and Angular 5 plugin for pell WYSIWYG HTML Rich Text Editor. https://github.com/jaredreich/pell

## HowTo

1. install
```
npm install angular-pell
```

2. import `PellModule`

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

3. use `pell-editor` component

```
<pell-editor></pell-editor>
```
