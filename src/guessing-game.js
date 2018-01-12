class GuessingGame {
	
    constructor(){}
		
    setRange(min, max) 
	{
		this.min = min;
		this.max = max;
    }

    guess()
	{
		if((this.max-this.min) % 2 == 0)
		{
			this.mid = this.min + ((this.max-this.min)/2);
		}
		
		else
		{
			this.mid =  this.min + ((this.max-this.min)/2 + 0.5);
		}
		return this.mid;
    }

    lower() 
	{
		this.max = this.mid;
    }

    greater() 
	{
		this.min = this.mid;
    }
}

module.exports = GuessingGame;
