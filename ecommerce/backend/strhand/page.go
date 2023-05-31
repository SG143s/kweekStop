package strhand

type Profile struct {
}

type Home struct {
	Prof     UserTop   `json:"profile"`
	PopCat   []CatLink `json:"popcats"`
	Popprod  []ProdSim `json:"poprod"`
	Newprod  []ProdSim `json:"newprod"`
	RandCat  []CatLink `json:"rcats"`
	Cheaprod []ProdSim `json:"chprod"`
}

type ProdP struct {
	Base  prodCom   `json:"pcom"`
	RelIt []ProdSim `json:"rprod"`
	Rev   []reviews `json:"prev"`
}

type Shop struct {
	Prof  UserTop   `json:"profile"`
	Sh    shopCom   `json:"shopD"`
	SProd []ProdSim `json:"sProd"`
}
