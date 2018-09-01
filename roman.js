

// To add corresponding base symbols in the array
// to handle cases which follow subtractive notation.
function sub_digit(num1,num2, i,c)
{
	c[i++] = num1;
	c[i++] = num2;
	return i;
}

function digit(ch,n,i,c)
{
	for (let j = 0; j < n; j++)
		c[i++] = ch;
	return i;
}

function printRoman(number)
{
	c=[];
	 i = 0;

	if (number <= 0)
	{
		console.log("Invalid number");
		return;
	}

	while (number != 0)
	{
		
		if (number >= 1000)
		{
			
			i = digit('M', Math.floor(number/1000), i, c);
			number = number%1000;
		}

		
		else if (number >= 500)
		{
			
			if (number < 900)
			{
			
			i = digit('D', Math.floor(number/500), i, c);
			number = number%500;
			}

		
			else
			{
			
				i = sub_digit('C', 'M', i, c);
				number = number%100 ;
			}
		}

		
		else if (number >= 100)
		{
			
			if (number < 400)
			{
				i = digit('C', Math.floor(number/100), i, c);
				number = number%100;
			}

		
			else
			{
				i = sub_digit('C','D',i,c);
				number = number%100;
			}
		}

		
		else if (number >= 50 )
		{
			
			if (number < 90)
			{
				i = digit('L', Math.floor(number/50),i,c);
				number = number%50;
			}

			
			else
			{
				i = sub_digit('X','C',i,c);
				number = number%10;
			}
		}
		
		else if (number >= 10)
		{
		
			if (number < 40)
			{
				i = digit('X', Math.floor(number/10),i,c);
				number = number%10;
			}

			
			else
			{
				i = sub_digit('X','L',i,c);
				number = number%10;
			}
		}

		
		else if (number >= 5)
		{
			if (number < 9)
			{
				i = digit('V',Math.floor( number/5),i,c);
				number = number%5;
			}

		
			else
			{
				i = sub_digit('I','X',i,c);
				number = 0;
			}
		}

		
		else if (number >= 1)
		{
			if (number < 4)
			{
				i = digit('I', number,i,c);
				number = 0;
			}

			
			else
			{
				i = sub_digit('I', 'V', i, c);
				number = 0;
			}
		}
	}



    var result='';
	for (let j = 0; j < i; j++)
        result=result+c[j];
        console.log(result);
}
   
	printRoman(process.argv[2]);
 
	
