(function executeRule(current, previous /*null when async*/) {

	// Add your code here
if(current.category == 'software' && current.subcategory == 'os')
{
	current.assignment_group = '8a4dde73c6112278017a6a4baf547aa7'; //software
}
else if(current.category == 'hardware' && current.subcategory == 'cpu')
{
	current.assignment_group = '8a5055c9c61122780043563ef53438e3'; //Hardware

}
})(current, previous);