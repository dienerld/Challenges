package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "ace":
		return 11
	case "two":
		return 2
	case "three":
		return 3
	case "four":
		return 4
	case "five":
		return 5
	case "six":
		return 6
	case "seven":
		return 7
	case "eight":
		return 8
	case "nine":
		return 9
	case "ten", "king", "queen", "jack":
		return 10
	case "joker":
		return 0
	}
	return 0
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	if card1 == "ace" && card1 == card2 {
		return "P"
	}

	sumCards := ParseCard(card1) + ParseCard(card2)
	switch {
	case sumCards == 21:
		if ParseCard(dealerCard) < 10 {
			return "W"
		}
		return "S"
	case sumCards >= 17 && sumCards <= 21:
		return "S"
	case sumCards >= 12:
		if ParseCard(dealerCard) >= 7 {
			return "H"
		}
		return "S"
	}
	return "H"
}
