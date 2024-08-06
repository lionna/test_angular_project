#My angular 17-18 test project.

what needs to be improved:
- [ ] adaptation for mobile devices
- [ ] interaction between components
- [ ] split the code into services
- [ ] write Jest tests
- [ ] manual testing

# Task 1: Angular. Intro task

1. Task: [link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/intro.md)
2. Screenshot:
![image](https://github.com/rolling-scopes-school/tati-moon-ANGULAR2024Q3/assets/170366343/ca02f577-dc60-4f07-8128-6a98834e4943)
3. Done 2024-07-06 / deadline 2024-07-09 01:59
4. Score: 70 / 70

- [x] Generated a new Angular project using ng-cli `ng new`
- [x] Migrated Angular application to ESLint with rules AirBnB `npm i eslint-config-airbnb-base`: https://github.com/airbnb/javascript

1. `ng add @angular-eslint/schematics`
2. `npm i eslint-config-airbnb-typescript`
3. `npm i eslint-config-airbnb-base`
4. `npm i eslint-config-airbnb-typescript`
5. `npm i eslint-plugin-simple-import-sort`
6. Updated `.eslintrc.json`
7. Run `ng lint`

- [x] Generated all the necessary components using ng-cli.

```bash
ng generate module components/header
ng generate component components/header
ng generate component components/header/logo
ng generate component components/header/search-input
ng generate component components/header/search-button
ng generate component components/header/filter-button
ng generate component components/header/login-info

ng generate module components/header/filter
ng generate component components/header/filter
ng generate component components/header/filter/sort-buttons
ng generate component components/header/filter/word-filter-input

ng generate module components/search
ng generate component components/search
ng generate component components/search/search-item/
ng generate component components/search/search-results/
ng generate component components/search/search-item/video-thumbnail
ng generate component components/search/search-item/views-count
ng generate component components/search/search-item/likes-count
ng generate component components/search/search-item/dislikes-count
ng generate component components/search/search-item/comments-count
ng generate component components/search/search-item/more-button

ng generate class components/search/search-response.model --type=model
ng generate class components/search/search-item.model --type=model
```

- [x] Created necessary interfaces for YouTube client based on mocked JSON response stored in `.json` file
- [x] ESLint is configured for TypeScript, enabling the no-explicit-any rule.
- [x] TypeScript is configured with `strict: true` rule enabled.


____________

1. Task 2: [link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/components-directives-pipes.md)
2. Screenshot:
![image](https://github.com/rolling-scopes-school/tati-moon-ANGULAR2024Q3/assets/170366343/c0895899-25b3-4172-a485-fd09e2e3ccd9)
3. Done 08.07.2024 / deadline 09.07.2024
6. Score: 100 /  100
- [x] Main layout is implemented (+10)
- [x] Fake search functionality is implemented: by submitting the form in the Header component, search results are shown (+20)
- [x] The Search result item component contains all the necessary data (+10)
- [x] The Filtering criteria block toggle functionality is implemented (+5)
- [x] The colored border under the Search result item is implemented using a Directive (+15)
- [x] Search result sorting is implemented (both ascending and descending directions) (+15)
- [x] Search result filtering by key words is implemented using a Pipe (+15)
- [x] Custom Button component is implemented and used across the application. The component utilizes [Content projection](https://angular.dev/guide/components/content-projection) to display the button text (+5)
- [x]  At least one of the components is implemented as [standalone](https://angular.dev/guide/components/importing). (+5)


____________

1. Task3: Modules & Services. Routing  [link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/modules-services-routing.md/)
2. Screenshots:
index page:
![image](https://github.com/user-attachments/assets/e2b23c8e-49db-4ad4-a518-489dfd8efe78)
login validation:
![image](https://github.com/user-attachments/assets/416659eb-1339-40e3-b806-82a3a2db0620)
search page:
![image](https://github.com/user-attachments/assets/b566e1c3-c0ae-491c-8ad4-c7e2c3e2874e)
detail information:
![image](https://github.com/user-attachments/assets/bde990e7-514c-4576-a736-076a1d40588f)
404 page:
![image](https://github.com/user-attachments/assets/ea5d44ad-98ca-4ce0-a04c-c204a5ff2a28)

3. Done 22.07.2024 / deadline 23.07.2024
4. Score: 100 / 100
  - [x] The 404 page and redirection logic is implemented (+15)
  - [x] The Login page functionality with necessary rules is implemented (+30)
  - [x] The Detailed information page is implemented (+20)
  - [x] The app.component doesn't include any logic and used only for markup (+15)
  - [x] At least two services (Login service and Youtube service) are implemented (+20)

____________

1. Task 4: forms [link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/forms.md)
2. Screenshot:
invalid login page:
![image](https://github.com/user-attachments/assets/ded7078e-7605-4cb2-bc0d-bb64c8f684f0)
login page:
![image](https://github.com/user-attachments/assets/7602f43e-2db1-44ea-a478-3e6877d775c8)

invalid admin page
![image](https://github.com/user-attachments/assets/7fa77a03-88c6-455d-83e9-a4b55a0e5da3)
![image](https://github.com/user-attachments/assets/a1f0b792-b2d0-43e0-89ce-9c7633877275)
valid admin page
![image](https://github.com/user-attachments/assets/1144941a-05a0-41cd-ba34-891693042f03)
![image](https://github.com/user-attachments/assets/2af0d171-5c46-4408-bfbb-6d9d27964d4e)

4. Done 24.07.2024 / deadline 30.07.2024
5. Score: 100 / 110
  - [x] Login block is implemented as reactive form (+10)
  - [x] Validation rules are applied to the Login block. Form submission is possible only if all inputs are valid (+15)
  - [x] The application indicates which inputs are invalid on the Login block with appropriate styles and messages (+15)
  - [x] Admin page is implemented as reactive form (+10)
  - [x] Validation rules are applied to the Admin page. Form submission is possible only if all inputs are valid (+15)
  - [x] The application indicates which inputs are invalid on the Admin page with appropriate styles and messages (+15)
  - [x] "Tags" sub-form is implemented using FormArray. "Add tag" button works correctly (+15)
  - [x] "Reset" button functionality is fully implemented (+5)

____________

1. Task 5: rx js observables [link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/rxjs-observables-http.md)
2. Screenshot:
![image](https://github.com/user-attachments/assets/2ff792b2-d699-4f73-8ee6-7c0c960ae0b7)
3. Done 29.07.2024 / deadline 30.07.2024
4. Score: 100 / 100
  - [x] Search input debounce is implemented (+15)
  - [x] Login block reflects the current login state (+15)
  - [x] Search functionality is integrated with the YouTube API (+30)
  - [x] Detailed information page uses a call to the YouTube API (+30)
  - [x] HTTP interceptor is used to pass the token and the base API URL (+10)

![image](https://github.com/user-attachments/assets/48496589-bab6-4a1a-b726-87928a8b47c9)


____________

1. Task 6: NgRx [link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/NgRX.md)
2. Screenshots:
header with create custom and favorite buttons:
![image](https://github.com/user-attachments/assets/c5f27be4-5e58-4ca2-8eb3-4a7fc120f329)
list of videos:
![image](https://github.com/user-attachments/assets/c06bbc64-ca47-402c-b71c-6eccf629fbda)
favorites list:
![image](https://github.com/user-attachments/assets/279fbe24-938e-4472-aad2-91107725382d)
pagination
![image](https://github.com/user-attachments/assets/644d3765-9cac-4d7e-b3db-b63b2e043374)


3. Done 04.08.2024 / deadline 06.08.2024
4. Score: 100 / 110
  - [x] Admin Page is generated (+5)
  - [x] Favorite Page is generated (+5)
  - [x] NgRx package is used and storage is created (+5)
  - [x] Custom Cards are saved in the store (+10)
  - [x] Videos (with favorite button) from the YouTube API received via Effects are saved in store (+20)
  - [x] Custom Cards (without favorite button) are displayed on List Page combined with YouTube videos (+20)
  - [x] Favorite Page displays all marked videos from List Page or View Page (+10)
  - [x] Clicking the favorite button on the card on Favorite Page removes item from the store and from the page immediately (+15)
  - [x] List Page displays 20 items with pagination and Custom Cards are added to the beginning of the list on 1 page (+10)

____________

1. Task 7: Signals [link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular/signals.md)
2. Screenshot:

![image](https://github.com/user-attachments/assets/204be3ba-addf-4b37-b618-3e818212d442)
 
3. Done 05.08.2024 / deadline 06.08.2024
4. Score: 30 /  30
  - [x] Refactor the API service to use a signal for managing the API request and returning the response data. Implement this in two or more times. (+10)
  - [x] Use a signal to display data in the component's template. Implement this in two or more times. (+10)
  - [x] Convert Observables to Signals using toSignal. Implement this in one or more times. (+10)