package sqlmain

import (
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func UsRegis(info strs.UserInfo) bool {
	_, err := db.Query("INSERT INTO users values (?, ?, ?, ?, ?, false, 0, ?)", info.ID, info.Name, info.UserName, info.Email, info.Password, info.ProfilePic)
	if err != nil {
		return false
	}
	return true
}

func CartAdd(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL addcart(?, ?, ?)", uid, info.ID, info.Quantity)
	return err == nil
}

func CartOp1(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL cartop1(?, ?)", uid, info.ID)
	return err == nil
}

func CartOp2(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL cartop2(?, ?)", uid, info.ID)
	return err == nil
}

func CartOp3(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL cartop3(?, ?)", uid, info.ID)
	return err == nil
}
