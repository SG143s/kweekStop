package op

import (
	"github.com/midtrans/midtrans-go"
	"github.com/midtrans/midtrans-go/snap"
)

func Paytest(payid string, n int) string {
	//Initiate client for Midtrans CoreAPI
	var c snap.Client
	c.New("SB-Mid-server-30-r1N7PybJ2hutM6viD6uTf", midtrans.Sandbox)

	var r snap.Request
	r.TransactionDetails.OrderID = payid
	r.TransactionDetails.GrossAmt = int64(n)

	res, _ := c.CreateTransaction(&r)

	return res.RedirectURL
}
