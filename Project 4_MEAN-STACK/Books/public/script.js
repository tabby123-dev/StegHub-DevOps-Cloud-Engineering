angular.module('bookApp', [])
.controller('BookController', ['$scope', '$http', function ($scope, $http) {

    $scope.newBook = {};

    function fetchBooks() {
        $http.get('/book')
            .then(response => {
                $scope.books = response.data;
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }

    fetchBooks();

    $scope.deleteBook = function (book) {
        $http.delete(`/book/${book.isbn}`)
            .then(() => {
                fetchBooks();
            })
            .catch(error => {
                console.error('Error deleting book:', error);
            });
    };

    $scope.addBook = function () {
        const newBook = {
            name: $scope.newBook.name,
            isbn: $scope.newBook.isbn,
            author: $scope.newBook.author,
            pages: $scope.newBook.pages
        };

        $http.post('/book', newBook)
            .then(() => {
                fetchBooks();

                // Clear the form
                $scope.newBook = {};
            })
            .catch(error => {
                console.error('Error adding book:', error);
            });
    };

}]);
