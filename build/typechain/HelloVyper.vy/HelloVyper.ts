/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface HelloVyperInterface extends utils.Interface {
  functions: {
    "printGreeting()": FunctionFragment;
    "setGreeting(string)": FunctionFragment;
    "greeting()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "printGreeting" | "setGreeting" | "greeting"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "printGreeting",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setGreeting", values: [string]): string;
  encodeFunctionData(functionFragment: "greeting", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "printGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "greeting", data: BytesLike): Result;

  events: {};
}

export interface HelloVyper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HelloVyperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    printGreeting(overrides?: CallOverrides): Promise<[string]>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    greeting(overrides?: CallOverrides): Promise<[string]>;
  };

  printGreeting(overrides?: CallOverrides): Promise<string>;

  setGreeting(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  greeting(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    printGreeting(overrides?: CallOverrides): Promise<string>;

    setGreeting(_greeting: string, overrides?: CallOverrides): Promise<void>;

    greeting(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    printGreeting(overrides?: CallOverrides): Promise<BigNumber>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    greeting(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    printGreeting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    greeting(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
