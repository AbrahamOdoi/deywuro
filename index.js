(function() {
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);

	function onDeviceReady() {
		$(".snd").click(function(){
			alert('asdf');
		})
		// document.getElementsByClassName("snd").addEventListener("click", function() {
			// alert('dsf');
// 
		// });
	};

})();


	// navigator.contactsPhoneNumbers.list(function(contacts) {
	// // console.log(contacts.length + ' contacts found');
	// $("#displayPhonebookLength").html(contacts.length + ' contacts found');
	// for (var i = 0; i < contacts.length; i++) {
	// console.log(contacts[i].id + " - " + contacts[i].displayName);
	// var contactName = contacts[i].displayName;
	// for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
	// var phone = contacts[i].phoneNumbers[j];
	// // var det = $("#displayPhonebook").html();
	// // console.log("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber + ")");
	// var contactrow= "
	// <div>
	// <label><input type='checkbox' />Abraham "+ phone.number +"</label>
	// </div>
	// ";
	// var details = contactName + " (" + phone.number + ")";
	// $("#myPopup").append(details);
	// }
	// }
	// }, function(error) {
	// console.error(error);
	// });
