$(document).ready(function (){
	// document.domain = "shielded-thicket-6358.herokuapp.com"
	console.log("loaded page");
	//The form

	//for adding buttons
	var addApp = angular.module("addForm", []);
	addApp.controller("addController", function($scope) {
		$scope.requestInfo = [];
		$scope.requestInfo["url"] = "";
		$scope.url = "";
		//Shows URL
		$scope.showURL = function(){
			$scope.requestInfo.url = $scope.url;

			return "The url is: " + $scope.requestInfo.url;
		};
		$scope.addFunction = function(){
			var functionJSON = {
				"url": $scope.url,
				"valueOne": $scope.valueOne,
				"valueTwo": $scope.valueTwo,
				"keyOne": $scope.keyOne,
				"keyTwo": $scope.keyTwo
			}
			console.log(functionJSON);
		
			//TODO: POST button
		};

	
	});


	//select the function to upload to the button
	var selectApp = angular.module("selectForm", []);

	selectApp.factory("selectFactory", function($http){
		// var serverUrl = "https://pure-brushlands-9706.herokuapp.com/cloudapi/functions";
		var serverUrl = "https://pure-brushlands-9706.herokuapp.com/cloudapi/functions";
		this.getList = function(){
			return $http({
				method: "GET",
				url: serverUrl
			}).then(function successCallback(response){
				console.log("successfully got functions");
				console.log(response);
				return response.data;

			}, function errorCallback(response, data){
			    console.log("couldn't get functions");
			    console.log(response);
			});
		};
		return this;
	});

	selectApp.controller("selectController", function($scope, selectFactory, $http){		
		selectFactory.getList().then(function(arrItems){

			$scope.buttonFunctions = arrItems;
		});
		
		//updates the button function
		$scope.selectFunction = function(){
			console.log($scope.selectedItem);
			var itemJSON = {
				"function_id": $scope.selectedItem
			}
			//Sends a get request to update the button
			var addFunctionURL = "https://pure-brushlands-9706.herokuapp.com/cloudapi/function_assignment"
			$http.post(addFunctionURL, itemJSON).then(function successCallback(response){
				console.log("successfully updated button function!");
			    console.log(response);

			}, function errorCallback(response){
				console.log("couldn't update the function");
			    console.log(response);
			});
		}
	});





});

