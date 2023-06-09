package strhand

type UserTop struct {
	Log        bool   `json:"logio"`
	ID         string `json:"uid"`
	UserName   string `json:"uname"`
	ProfilePic string `json:"prpic"`
}

type UserInfo struct {
	ID         string `json:"uid"`
	Name       string `json:"name"`
	UserName   string `json:"usname"`
	Email      string `json:"email"`
	Password   string `json:"passw"`
	ProfilePic string `json:"prpic"`
	Address    string `json:"uadd"`
}

type UserReg struct {
	Name       string `json:"name"`
	UserName   string `json:"usname"`
	Email      string `json:"email"`
	Password   string `json:"passw"`
	ProfilePic string `json:"prpic"`
	Address    string `json:"uadd"`
}

type LogInf struct {
	Username string `json:"luname"`
	Password string `json:"lpass"`
}

type ProdSim struct {
	Base     ProdBase `json:"base"`
	Imgpath  string   `json:"imgpath"`
	DisPrice float32  `json:"discprice"`
}

type ProdBase struct {
	ID       string  `json:"pid"`
	Name     string  `json:"pname"`
	Price    float32 `json:"orprice"`
	Category string  `json:"pcat"`
	Rating   float32 `json:"prate"`
	SReview  int     `json:"psrev"`
}

type CatLink struct {
	ID   int    `json:"cid"`
	Name string `json:"cname"`
	Img  string `json:"cimg"`
}

type reviews struct {
	UserName string  `json:"uname"`
	Rating   float32 `json:"urate"`
	Review   string  `json:"urev"`
}

type ShopSim struct {
	ID   string  `json:"sid"`
	Name string  `json:"sname"`
	Img  string  `json:"simg"`
	Rate float32 `json:"srate"`
}

type ShopAdd struct {
	Base    ShopSim `json:"base"`
	Owner   string  `json:"uid"`
	Address string  `json:"saddr"`
	City    string  `json:"scity"`
}

type ProdCom struct {
	Base     ProdBase `json:"pbase"`
	Imgpaths []string `json:"imgpaths"`
	Desc     string   `json:"pdesc"`
	Shop     ShopSim  `json:"sbase"`
}

type ProdAdd struct {
	ID       string   `json:"pid"`
	Name     string   `json:"pname"`
	Price    float32  `json:"orprice"`
	Category int      `json:"pcat"`
	Stock    int      `json:"pstock"`
	Imgpaths []string `json:"imgpaths"`
	Desc     string   `json:"pdesc"`
	ShopID   string   `json:"sid"`
}

type shopCom struct {
	Base    ShopSim `json:"sbase"`
	Address string  `json:"saddr"`
	City    string  `json:"scity"`
}

type ProdCart struct {
	ID       string  `json:"pid"`
	Name     string  `json:"pname"`
	Quantity int     `json:"quan"`
	SPrice   float32 `json:"sprice"`
	ToPrice  float32 `json:"tprice"`
	Imgpath  string  `json:"imgpath"`
}

type ProdCAdd struct {
	ID       string `json:"pid"`
	Quantity int    `json:"quan"`
}

type CartOp struct {
	Base ProdCAdd `json:"base"`
	Op   string   `json:"operation"`
}

type ProdOr struct {
	ID       string  `json:"pid"`
	Name     string  `json:"pname"`
	Quantity int     `json:"pquan"`
	SPrice   float32 `json:"singleprice"`
	TPrice   float32 `json:"tprice"`
	Imgpath  string  `json:"pimg"`
}

type OrderSim struct {
	ID        string   `json:"orid"`
	PaydetID  string   `json:"payid"`
	Status    string   `json:"orstat"`
	Paystatus string   `json:"paystat"`
	Total     float32  `json:"ortot"`
	Date      string   `json:"date"`
	Prods     []ProdOr `json:"orprod"`
}
