// main
function timedCount() 
{
	checkQueueProcess();
	checkState();
    setTimeout("timedCount()", 1000);
	setTimeout("respondIO()", 1500);
}

timedCount();

/* Jagat's block */
var acctBal = 0;

function process1(startPositionP1) {
				
    var info = getAccInfo();

    for(var i = startPositionP1; i < startPositionP1+5 && i< info.length; i++)
    {
        acctBal += info[i];
    }
            
	if (startPositionP1+5 >= info.length) {		
		return -1;
	}			

	startPositionP1 += 5;
			
	return startPositionP1;   		
	
}
/* End of Jagat's block */

/*Mansi's block */
var testName = "";

function process2(startPositionP2) {

    var contactName = "Harish Chowdhary";
    var contactsLength = getContactLen();
	var contactsList = getContacts();

    for (i = startPositionP2; i < startPositionP2+5 && i< contactsLength; i++)
    {
        if (contactsList[i] == contactName)
        {
			testName = contactsList[i];
			return true;
        }
	}
	
    startPositionP2 = startPositionP2 + 5;
    
	if (startPositionP2+5 >= contactsLength) {	
		startPositionP2 = false;
	}

    return startPositionP2;
	
}
 /* End of Mansi's block*/

// *****************Update a security file process*****************
/* Huang Yongcai's block */
			
function process3(startPositionP3) {
	            
	var userlist = getUsernameList();
	var passlist = getPasswordList();
	var keySearchValue = "iamsuperman";
	var new_name = "iambatman";
	var new_pass = "iloveyousuperman";
	var nextStartPositionP3;
	var endPositionP3;

	if ((startPositionP3 + 5) < getNumberOfAccount()) {
		endPositionP3 = startPositionP3 + 5;
		nextStartPositionP3 = endPositionP3 + 1;
	} else {
		endPositionP3 = getNumberOfAccount();
	}

	for (var i = startPositionP3; i <= endPositionP3; i++) {
		if (keySearchValue == userlist[i]) {
			setUserAndPass(new_name, new_pass, i);
			return "successful";
		}
	}
	
	if (nextStartPositionP3+5 >= getNumberOfAccount()) {
		return "Element not found";
	} else {
		return nextStartPositionP3;
	}
		
}
/* End of Huang Yongcai's block */

function process4() {

}

// Process 5: Caculate Vector by Tony
var totalNumberX = 0;
var totalNumberY = 0;

function process5(startPositionP5) { 
	var vect = getVector();
	var vectorL = getVectorLength();

    for(var i=startPositionP5; i< startPositionP5+5 && i< vectorL; i++){
        totalNumberX += vect[i][0];
        totalNumberY += vect[i][1];
    }

	if (startPositionP5+5 >= vectorL) {		
		return -1;
	}		
	
	startPositionP5 += 5;
			
	return startPositionP5;
	
}
/* End of Tony's block*/

/* Nimitha's block */
var tempStat = 0;
var statsAvg = 0;
function process6(startPositionP6) {
	
    var statsLength = getStatsLength();
	var stat = gerStatsList();
     
	for(var j=startPositionP6; j<startPositionP6+5 && j<statsLength; j++){
        tempStat += getStatistics(j);
    }
       
	if (startPositionP6+5 >= statsLength) {	
		statsAvg = tempStat / statsLength;
		return -1;
	}

	startPositionP6 += 5;
			
	return startPositionP6;
	
}
/* End of Nimitha's block */

// Asaf's block
var name = "Miriam"; 
var phoneNumber = "User_not_found";

function process7(startPositionP7) {
	
	var start = startPositionP7;
	var end = startPositionP7 + 5;
	var nameLenght = getNameListLength();
	
	for (i = startPositionP7; i < startPositionP7+5 && i< nameLenght; i++)
	{
		if (getNameAtIndex(i) == name)	
		{
			phoneNumber = getPhoneAtIndex(i);
			return true;
		}
	}
	
	if (startPositionP7+5 >= nameLenght) {	
		startPositionP7 = false;
	}
	
	return end;			
}

/* End of Ash's block */

// Ash's block
var movie_name = "M"; 
var release_year = "Data_not_found";

function process8(startPositionP8) {
	
	var start = startPositionP8;
	var end = startPositionP8 + 5;
	var list_length = getMovieListLength();
	
	for (i = startPositionP8; i < startPositionP8+5 && i< list_length; i++)
	{
		if (getMovieAtIndex(i) == movie_name)	
		{
			release_year = getYearAtIndex(i);
			return true;
		}
	}
	
	if (startPositionP8+5 >= list_length) {	
		startPositionP8 = false;
	}
	
	return end;			
}

/* End of Ash's block */