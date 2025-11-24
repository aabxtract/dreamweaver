import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const transactions = [
  {
    id: "txn-01",
    date: "2024-07-29",
    description: "Dream Weave - 'Cosmic Ocean'",
    amount: -0.05,
    currency: "ETH",
    status: "Completed",
  },
  {
    id: "txn-02",
    date: "2024-07-28",
    description: "Gallery Sale - 'Whispering Crystals'",
    amount: 1.2,
    currency: "ETH",
    status: "Completed",
  },
  {
    id: "txn-03",
    date: "2024-07-27",
    description: "Dream Weave - 'Nebula City'",
    amount: -0.05,
    currency: "ETH",
    status: "Completed",
  },
  {
    id: "txn-04",
    date: "2024-07-26",
    description: "Minting Fee - 'Starlight Serenade'",
    amount: -0.02,
    currency: "ETH",
    status: "Completed",
  },
  {
    id: "txn-05",
    date: "2024-07-25",
    description: "Dream Weave - 'Melting Clock'",
    amount: -0.05,
    currency: "ETH",
    status: "Pending",
  },
    {
    id: "txn-06",
    date: "2024-07-24",
    description: "Gallery Purchase - 'Flying Books'",
    amount: -0.75,
    currency: "ETH",
    status: "Completed",
  },
  {
    id: "txn-07",
    date: "2024-07-23",
    description: "Staking Reward",
    amount: 0.1,
    currency: "ETH",
    status: "Completed",
  },
    {
    id: "txn-08",
    date: "2024-07-22",
    description: "Dream Weave - 'Galaxy Portrait'",
    amount: -0.05,
    currency: "ETH",
    status: "Failed",
  },
];

export default function TransactionsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Transaction History</h1>
        <p className="mt-4 text-lg text-foreground/80">
          A record of all your cosmic transactions and dream weavings.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your last 8 transactions on the Dream Weaver platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className={`text-right font-mono ${transaction.amount > 0 ? "text-green-400" : "text-red-400"}`}>
                    {transaction.amount.toFixed(4)} {transaction.currency}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        transaction.status === "Completed"
                          ? "default"
                          : transaction.status === "Pending"
                          ? "secondary"
                          : "destructive"
                      }
                      className={
                        transaction.status === "Completed"
                          ? "bg-green-600/20 text-green-300 border-green-500/30"
                          : transaction.status === "Pending"
                          ? "bg-yellow-600/20 text-yellow-300 border-yellow-500/30"
                          : "bg-red-600/20 text-red-300 border-red-500/30"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
