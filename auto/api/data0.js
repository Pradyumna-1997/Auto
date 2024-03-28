import axios from "axios";

export const getUserDetails = async () =>
  await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/getDealerDetailsOfUser`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const getWarranties = async () =>
  await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/getAllWarranties`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const getAmcs = async () =>
  await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/getAllAmcs`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const getMake = async () =>
  await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/getAllMake`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const getModelsById = async (id) =>
  await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/getModelsForMakeId?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const getCities = async (id) =>
  await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/getAllCities?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const getWarrantyDetailsById = async (id) =>
  await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/getWarrantyDetails?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const getAMCDetailsById = async (id) =>
  await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/getAmcDetails?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const enrollVehicle = async (payload) =>
  await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/enrollVehicle`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  export const enrollVehicleToAMC = async (payload) =>
  await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/enrollVehicleToAMC`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const enrollAndPlace = async (payload) =>
  await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/enrollAndPlaceOrder`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const getVehicleByDate = async (payload) =>
  await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/searchEnrolledByDate?startDate=${payload.startDate}&endDate=${payload.endDate}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const getVehicleByOthers = async (payload) =>
  await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/searchEnrolledByOthers?chassisNo=${payload.chassisNo}&customerPhone=${payload.customerPhone}&invoiceNo=${payload.invoiceNo}&displayWrntyId=${payload.displayWrntyId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const placeOrder = async (id) =>
  await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/placeOrder?id=${id}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const updateOrderStatus = async (id) =>
  await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/updatePaymentStatus?id=${id}&mode=CASH&remarks=Payment made to KleanMobility agent`,
    null,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const initiatePayment = async (id) =>
  await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/initiatePaymentEaseBuzzForKlean?bookingId=${id}`,
    null
  );

export const getDetailsByMobile = async (payload) =>
  await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/searchEnrolledByMobile?customerPhone=${payload.customerPhone}`
  );

export const getBilledVehicles = async () => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/getBilledVehicles`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  // console.log(localStorage.getItem("token"));
};

export const getAmcBilledEntries = async () => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/getAmcBilledEntries`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  // console.log(localStorage.getItem("token"));
};

export const getEnrolledByUser = async () => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/getEnrolledByUser`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  // console.log(localStorage.getItem("token"));
};

export const registerRequest = async (payload) => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/registerRequest?chassisNo=${payload.chassisNo}&request=${payload.request}&techPhone=${payload.techPhone}&techMail=${payload.techMail}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
export const getAllParts = async () => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/getAllParts`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
