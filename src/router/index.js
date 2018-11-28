import Vue from 'vue'
import Router from 'vue-router'
import BookShelf from '../components/BookShelf.vue'
import BookStore from '../components/BookStore.vue'
import Selected from '../components/Selected.vue'
import MyBook from '../components/MyBook.vue'
import SearchView from '../components/SearchView.vue'
import RanKings from '../components/FivePalaces/RanKings.vue'
import Free from '../components/FivePalaces/Free.vue'
import MonthlyPackage from '../components/FivePalaces/MonthlyPackage.vue'
import BookList from '../components/FivePalaces/BookList.vue'
import FiniShed from '../components/FivePalaces/FiniShed.vue'
import BooKPage from '../components/bookPage/BooKPage.vue'
import BookDetails from '../components/bookDetails/BookDetails.vue'
import DetailsView from '../components/detailsView/DetailsView.vue'
import DetailsView1 from '../components/detailsView/DetailsView1.vue'
import ShowHidden from '../components/detailsView/ShowHidden.vue'
import More from '../components/More/More.vue'
import SearchResult from '../components/SearchResult.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {path: '/bookshelf', name: 'bookshelf', component: BookShelf},
    {path: '/bookstore', name: 'bookstore', component: BookStore},
    {path: '/selected', name: 'selected', component: Selected},
    {path: '/myBook', name: 'myBook', component: MyBook},
    {path: '/searchView', name: 'searchView', component: SearchView},
    {path: '/rankings', name: 'rankings', component: RanKings},
    {path: '/free', name: 'free', component: Free},
    {path: '/monthlyPackage', name: 'monthlyPackage', component: MonthlyPackage},
    {path: '/bookList', name: 'bookList', component: BookList},
    {path: '/finished', name: 'finished', component: FiniShed},
    {path: '/bookPage', name: 'bookPage', component: BooKPage},
    {path: '/bookDetails', name: 'bookDetails', component: BookDetails},
    {path: '/detailsView', component: DetailsView, name: 'detailsView'},
    {path: '/detailsView1', component: DetailsView1, name: 'detailsView1'},
    {path: '/showHidden', component: ShowHidden, name: 'showHidden'},
    {path: '/more', component: More, name: 'more'},
    {path: '/searchResult', component: SearchResult, name: 'searchResult'}
  ],
  linkActiveClass: 'active'
})

export default router
