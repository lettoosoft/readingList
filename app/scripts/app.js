(function () {
    'use strict';

    /**
     * @ngdoc overview
     * @name bookmarkApp
     * @description
     * # bookmarkApp
     *
     * Main module of the application.
     */
    angular.module('bookmarkApp', [])

        .controller('ReadingListController', function () {
            this.books = books;
            this.genres = genres;
        })

        .directive('bookGenres', function(){
            return {
                restrict: 'E',
                templateUrl: 'views/book-generes.html',
                scope: {
                    genres: '='
                }
            }
        })

        .directive('bookCover', function(){
            return {
                restrict: 'E',
                templateUrl: 'views/book-cover.html',
                replace: true,
                scope: {
                    b: '='
                }
            }
        })

        .directive('reviewForm', function(){
            return {
                restrict: 'E',
                templateUrl: 'views/review-form.html',
                replace: true,
                controller: function(){
                    this.showForm = false;
                    this.book = {genres: {}};
                    this.addReview = function(form) {
                        books.push(this.book);
                        this.book = {genres: {}};

                        form.$setPristine();
                    }
                },
                controllerAs: 'reviewFormCtrl',
                scope: {
                    books: '=',
                    genres: '='
                }
            }
        })
    ;

    var genres = ['test1', 'abc', 'love', 'dog', 'god', 'ppp', 'django'];
    var books = [
        {
            title: 'my first book',
            author: 'jeffrey',
            isbn: '0553593714',
            review: 'really a great book',
            rating: 4,
            genres: {'abc': true, 'dog': true}
        },
        {
            title: 'my second book',
            author: 'jeffrey',
            isbn: '0553593714',
            review: 'really a great book',
            rating: 5,
            genres: {'abc': true, 'dog': false}
        },
        {
            title: 'django 2 scoop',
            author: 'jeffrey',
            isbn: '0553593714',
            review: 'really a great book',
            rating: 5,
            genres: {'abc': true, 'dog': true, 'django': true}
        }
    ]
})();
