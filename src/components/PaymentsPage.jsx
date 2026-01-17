import React from 'react';
import PaymentCard from './PaymentCard';
import { MOCK_PAYMENTS } from '../data/mockData';

const PaymentsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Payment History</h1>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">
          Export
        </button>
      </div>

      <div className="space-y-4">
        {MOCK_PAYMENTS.map((payment) => (
          <PaymentCard key={payment.id} payment={payment} />
        ))}
      </div>
    </div>
  );
};

export default PaymentsPage;
