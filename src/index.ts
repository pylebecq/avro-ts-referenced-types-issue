import { CreateUser } from "./__generated__/CreateUser.avsc";
import { Message } from "./__generated__/Message.avsc";
import { UpdateAddress } from "./__generated__/UpdateAddress.avsc";

const createUser: CreateUser = {
  userId: "123456789",
  name: "John Doe",
  address: {
    street: "1st Whatever Street",
    zipcode: "AX-50",
    country: "Atlantide",
  },
};

const createUserMessage: Message = {
  type: "CreateUser",
  CreateUser: createUser,
  UpdateAddress: null,
};

console.log(createUserMessage);

const updateAddress: UpdateAddress = {
  userId: "123456789",
  address: {
    street: "42nd Some Other street",
    zipcode: "HDR",
    country: "The Cow Level",
  },
};

const updateAddressMessage: Message = {
  type: "UpdateAddress",
  CreateUser: null,
  UpdateAddress: updateAddress,
};

console.log(updateAddressMessage);
