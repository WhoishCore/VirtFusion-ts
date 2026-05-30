import isBoolean from "lodash/isBoolean";
import isString from "lodash/isString";

import { retrieveServerBackups } from "./functions/backups";
import { retrieveDnsService } from "./functions/dns";
import { testConnection } from "./functions/general/testConnection";
import {
  type HypervisorListOptions,
  listHypervisorGroups,
  listHypervisors,
  retrieveHypervisor,
  retrieveHypervisorGroup,
  retrieveHypervisorGroupResources,
} from "./functions/hypervisors";
import {
  type AddIpBlockIpv4Options,
  addIpBlockIpv4,
  type IpBlockListOptions,
  listIpBlocks,
  retrieveIpBlock,
} from "./functions/ipBlocks";
import {
  retrieveIso,
  retrieveTemplatesFromServerPackageSpec,
} from "./functions/media";
import {
  retrievePackage,
  retrievePackages,
} from "./functions/packages/retrieve";
import { retrieveQueueItem } from "./functions/queue";
import {
  type AddUserCreditOptions,
  type AddUserResourcePackOptions,
  addUserCredit,
  addUserHourlyGroupProfile,
  addUserResourceGroupProfile,
  addUserResourcePack,
  cancelUserCredit,
  type DeleteResourcePackServersOptions,
  type DeleteUserResourcePackOptions,
  deleteResourcePackServers,
  deleteUserResourcePack,
  type GetUserResourcePackOptions,
  getUserResourcePack,
  type ModifyUserAccessOptions,
  type ModifyUserResourcePackOptions,
  modifyUserAccess,
  modifyUserResourcePack,
  removeUserHourlyGroupProfile,
  removeUserResourceGroupProfile,
  retrieveCurrencies,
  retrieveHourlyStatsByUserExtRelationId,
  retrieveReportByUserExtRelationId,
  retrieveUsageByUserExtRelationId,
  type SelfServiceExtRelationOptions,
  type SelfServiceProfileOptions,
  type SelfServiceReportOptions,
  type SelfServiceStatsOptions,
  type SetUserHourlyResourcePackOptions,
  setUserHourlyResourcePack,
  suspendResourcePackServers,
  unsuspendResourcePackServers,
} from "./functions/selfService";
import { type BuildOptions, buildServer } from "./functions/servers/build";
import { type CreateOptions, createServer } from "./functions/servers/create";
import { deleteServer } from "./functions/servers/delete";
import {
  applyServerFirewallRules,
  disableServerFirewall,
  enableServerFirewall,
  type FirewallRulesOptions,
  type FirewallSyncOptions,
  retrieveServerFirewall,
} from "./functions/servers/firewall";
import { type ListOptions, listServer } from "./functions/servers/list";
import {
  type BackupManagerAccessOptions,
  type CustomXmlOptions,
  changeServerOwner,
  changeServerPackage,
  createServerVnc,
  modifyServerBackupManagerAccess,
  modifyServerCpuCores,
  modifyServerMemory,
  modifyServerName,
  retrieveServersByUser,
  retrieveServerTemplates,
  retrieveServerVnc,
  suspendServer,
  type ThrottleCpuOptions,
  throttleServerCpu,
  unsuspendServer,
  updateServerBackupPlan,
  updateServerCustomXml,
  type VncOptions,
} from "./functions/servers/management";
import {
  type AddIpv4QuantityOptions,
  addServerIpv4,
  addServerIpv4Quantity,
  addServerNetworkWhitelist,
  type DeleteNetworkWhitelistOptions,
  deleteServerIpv4,
  deleteServerNetworkWhitelist,
  type Ipv4Options,
  type NetworkWhitelistOptions,
} from "./functions/servers/network";
import { type ServerPowerAction, serverPower } from "./functions/servers/power";
import {
  type ResetPasswordOptions,
  resetPassword,
} from "./functions/servers/resetPassword";
import { retrieveServer } from "./functions/servers/retrieve";
import { retrieveServerTraffic } from "./functions/servers/traffic";
import {
  addServerTrafficBlock,
  deleteServerTrafficBlock,
  type ModifyTrafficOptions,
  modifyServerTraffic,
  retrieveServerTrafficBlocks,
  type TrafficBlockOptions,
} from "./functions/servers/trafficBlocks";
import { type AddOptions, addSshKey } from "./functions/sshKeys/add";
import { deleteSshKey } from "./functions/sshKeys/delete";
import { retrieveSshKey } from "./functions/sshKeys/retrieve";
import { retrieveUserSshKeys } from "./functions/sshKeys/retrieveByUser";
import {
  type CreateUserOptions,
  createUser,
  deleteUserByExtRelationId,
  generateUserLoginTokensByExtRelationId,
  generateUserLoginTokensByServerId,
  type ModifyUserOptions,
  modifyUserByExtRelationId,
  resetUserPasswordByExtRelationId,
  retrieveUserByExtRelationId,
  type UserExtRelationOptions,
} from "./functions/users";

export class VirtFusionV1 {
  private static initialized = false;
  private static host: string;
  private static https: boolean;
  private static baseUrl: string;
  private static token: string;

  general = {
    testConnection: async () => {
      this.checkClassInitialized();
      return await testConnection();
    },
  };

  packages = {
    retrieve: async () => {
      this.checkClassInitialized();
      return await retrievePackages();
    },
    retrieveById: async (packageId: number) => {
      this.checkClassInitialized();
      return await retrievePackage(packageId);
    },
  };

  backups = {
    retrieveByServer: async (serverId: number) => {
      this.checkClassInitialized();
      return await retrieveServerBackups(serverId);
    },
  };

  dns = {
    retrieveService: async (serviceId: string) => {
      this.checkClassInitialized();
      return await retrieveDnsService(serviceId);
    },
  };

  hypervisors = {
    list: async (options?: HypervisorListOptions) => {
      this.checkClassInitialized();
      return await listHypervisors(options);
    },
    retrieve: async (hypervisorId: number) => {
      this.checkClassInitialized();
      return await retrieveHypervisor(hypervisorId);
    },
    listGroups: async (options?: HypervisorListOptions) => {
      this.checkClassInitialized();
      return await listHypervisorGroups(options);
    },
    retrieveGroup: async (hypervisorGroupId: number) => {
      this.checkClassInitialized();
      return await retrieveHypervisorGroup(hypervisorGroupId);
    },
    retrieveGroupResources: async (
      hypervisorGroupId: number,
      options?: HypervisorListOptions,
    ) => {
      this.checkClassInitialized();
      return await retrieveHypervisorGroupResources(hypervisorGroupId, options);
    },
  };

  ipBlocks = {
    addIpv4: async (blockId: number, addIpv4Options: AddIpBlockIpv4Options) => {
      this.checkClassInitialized();
      return await addIpBlockIpv4(blockId, addIpv4Options);
    },
    list: async (options?: IpBlockListOptions) => {
      this.checkClassInitialized();
      return await listIpBlocks(options);
    },
    retrieve: async (blockId: number) => {
      this.checkClassInitialized();
      return await retrieveIpBlock(blockId);
    },
  };

  media = {
    retrieveIso: async (isoId: string) => {
      this.checkClassInitialized();
      return await retrieveIso(isoId);
    },
    retrieveTemplatesFromServerPackageSpec: async (serverPackageId: number) => {
      this.checkClassInitialized();
      return await retrieveTemplatesFromServerPackageSpec(serverPackageId);
    },
  };

  queue = {
    retrieve: async (queueId: number) => {
      this.checkClassInitialized();
      return await retrieveQueueItem(queueId);
    },
  };

  selfService = {
    addUserCredit: async (
      extRelationId: string,
      addCreditOptions: AddUserCreditOptions,
      options?: SelfServiceExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await addUserCredit(extRelationId, addCreditOptions, options);
    },
    addUserHourlyGroupProfile: async (
      extRelationId: string,
      profileOptions: SelfServiceProfileOptions,
      options?: SelfServiceExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await addUserHourlyGroupProfile(
        extRelationId,
        profileOptions,
        options,
      );
    },
    addUserResourceGroupProfile: async (
      extRelationId: string,
      profileOptions: SelfServiceProfileOptions,
      options?: SelfServiceExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await addUserResourceGroupProfile(
        extRelationId,
        profileOptions,
        options,
      );
    },
    addUserResourcePack: async (
      extRelationId: string,
      resourcePackOptions: AddUserResourcePackOptions,
      options?: SelfServiceExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await addUserResourcePack(
        extRelationId,
        resourcePackOptions,
        options,
      );
    },
    cancelUserCredit: async (creditId: number) => {
      this.checkClassInitialized();
      return await cancelUserCredit(creditId);
    },
    deleteResourcePackServers: async (
      packId: number,
      options?: DeleteResourcePackServersOptions,
    ) => {
      this.checkClassInitialized();
      return await deleteResourcePackServers(packId, options);
    },
    deleteUserResourcePack: async (
      packId: number,
      options?: DeleteUserResourcePackOptions,
    ) => {
      this.checkClassInitialized();
      return await deleteUserResourcePack(packId, options);
    },
    getUserResourcePack: async (
      packId: number,
      options?: GetUserResourcePackOptions,
    ) => {
      this.checkClassInitialized();
      return await getUserResourcePack(packId, options);
    },
    hourlyStatsByUserExtRelationId: async (
      extRelationId: string,
      options?: SelfServiceStatsOptions,
    ) => {
      this.checkClassInitialized();
      return await retrieveHourlyStatsByUserExtRelationId(
        extRelationId,
        options,
      );
    },
    modifyUserAccess: async (
      extRelationId: string,
      accessOptions: ModifyUserAccessOptions,
      options?: SelfServiceExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await modifyUserAccess(extRelationId, accessOptions, options);
    },
    modifyUserResourcePack: async (
      packId: number,
      modifyOptions: ModifyUserResourcePackOptions,
    ) => {
      this.checkClassInitialized();
      return await modifyUserResourcePack(packId, modifyOptions);
    },
    removeUserHourlyGroupProfile: async (
      profileId: number,
      extRelationId: string,
      options?: SelfServiceExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await removeUserHourlyGroupProfile(
        profileId,
        extRelationId,
        options,
      );
    },
    removeUserResourceGroupProfile: async (
      profileId: number,
      extRelationId: string,
      options?: SelfServiceExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await removeUserResourceGroupProfile(
        profileId,
        extRelationId,
        options,
      );
    },
    reportByUserExtRelationId: async (
      extRelationId: string,
      options?: SelfServiceReportOptions,
    ) => {
      this.checkClassInitialized();
      return await retrieveReportByUserExtRelationId(extRelationId, options);
    },
    retrieveCurrencies: async () => {
      this.checkClassInitialized();
      return await retrieveCurrencies();
    },
    setUserHourlyResourcePack: async (
      extRelationId: string,
      resourcePackOptions: SetUserHourlyResourcePackOptions,
      options?: SelfServiceExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await setUserHourlyResourcePack(
        extRelationId,
        resourcePackOptions,
        options,
      );
    },
    suspendResourcePackServers: async (packId: number) => {
      this.checkClassInitialized();
      return await suspendResourcePackServers(packId);
    },
    unsuspendResourcePackServers: async (packId: number) => {
      this.checkClassInitialized();
      return await unsuspendResourcePackServers(packId);
    },
    usageByUserExtRelationId: async (
      extRelationId: string,
      options?: SelfServiceStatsOptions,
    ) => {
      this.checkClassInitialized();
      return await retrieveUsageByUserExtRelationId(extRelationId, options);
    },
  };

  server = {
    list: async (options?: ListOptions) => {
      this.checkClassInitialized();
      return await listServer(options);
    },
    retrieve: async (serverId: number) => {
      this.checkClassInitialized();
      return await retrieveServer(serverId);
    },
    create: async (createOptions: CreateOptions) => {
      this.checkClassInitialized();
      return await createServer(createOptions);
    },
    build: async (serverId: number, buildOptions: BuildOptions) => {
      this.checkClassInitialized();
      return await buildServer(serverId, buildOptions);
    },
    delete: async (serverId: number, delay: number) => {
      this.checkClassInitialized();
      return await deleteServer(serverId, delay);
    },
    traffic: async (serverId: number) => {
      this.checkClassInitialized();
      return await retrieveServerTraffic(serverId);
    },
    resetPassword: async (
      serverId: number,
      resetPasswordOptions: ResetPasswordOptions,
    ) => {
      this.checkClassInitialized();
      return await resetPassword(serverId, resetPasswordOptions);
    },
    backupPlan: async (serverId: number, planId: number) => {
      this.checkClassInitialized();
      return await updateServerBackupPlan(serverId, planId);
    },
    changePackage: async (serverId: number, packageId: number) => {
      this.checkClassInitialized();
      return await changeServerPackage(serverId, packageId);
    },
    modifyName: async (serverId: number, name: string) => {
      this.checkClassInitialized();
      return await modifyServerName(serverId, name);
    },
    retrieveByUser: async (userId: number) => {
      this.checkClassInitialized();
      return await retrieveServersByUser(userId);
    },
    retrieveTemplates: async (serverId: number) => {
      this.checkClassInitialized();
      return await retrieveServerTemplates(serverId);
    },
    suspend: async (serverId: number) => {
      this.checkClassInitialized();
      return await suspendServer(serverId);
    },
    unsuspend: async (serverId: number) => {
      this.checkClassInitialized();
      return await unsuspendServer(serverId);
    },
    throttleCpu: async (
      serverId: number,
      throttleOptions: ThrottleCpuOptions,
    ) => {
      this.checkClassInitialized();
      return await throttleServerCpu(serverId, throttleOptions);
    },
    vnc: async (serverId: number, vncOptions: VncOptions) => {
      this.checkClassInitialized();
      return await createServerVnc(serverId, vncOptions);
    },
    retrieveVnc: async (serverId: number) => {
      this.checkClassInitialized();
      return await retrieveServerVnc(serverId);
    },
    changeOwner: async (serverId: number, newOwnerId: number) => {
      this.checkClassInitialized();
      return await changeServerOwner(serverId, newOwnerId);
    },
    modifyMemory: async (serverId: number, memory: number) => {
      this.checkClassInitialized();
      return await modifyServerMemory(serverId, memory);
    },
    modifyCpuCores: async (serverId: number, cpuCores: number) => {
      this.checkClassInitialized();
      return await modifyServerCpuCores(serverId, cpuCores);
    },
    customXml: async (serverId: number, customXmlOptions: CustomXmlOptions) => {
      this.checkClassInitialized();
      return await updateServerCustomXml(serverId, customXmlOptions);
    },
    modifyBackupManagerAccess: async (
      serverId: number,
      backupManagerAccessOptions: BackupManagerAccessOptions,
    ) => {
      this.checkClassInitialized();
      return await modifyServerBackupManagerAccess(
        serverId,
        backupManagerAccessOptions,
      );
    },
    addNetworkWhitelist: async (
      serverId: number,
      whitelistOptions: NetworkWhitelistOptions,
    ) => {
      this.checkClassInitialized();
      return await addServerNetworkWhitelist(serverId, whitelistOptions);
    },
    deleteNetworkWhitelist: async (
      serverId: number,
      whitelistOptions: DeleteNetworkWhitelistOptions,
    ) => {
      this.checkClassInitialized();
      return await deleteServerNetworkWhitelist(serverId, whitelistOptions);
    },
    addIpv4Quantity: async (
      serverId: number,
      ipv4QuantityOptions: AddIpv4QuantityOptions,
    ) => {
      this.checkClassInitialized();
      return await addServerIpv4Quantity(serverId, ipv4QuantityOptions);
    },
    addIpv4: async (serverId: number, ipv4Options: Ipv4Options) => {
      this.checkClassInitialized();
      return await addServerIpv4(serverId, ipv4Options);
    },
    deleteIpv4: async (serverId: number, ipv4Options: Ipv4Options) => {
      this.checkClassInitialized();
      return await deleteServerIpv4(serverId, ipv4Options);
    },
    disableFirewall: async (
      serverId: number,
      networkInterface: string,
      options?: FirewallSyncOptions,
    ) => {
      this.checkClassInitialized();
      return await disableServerFirewall(serverId, networkInterface, options);
    },
    enableFirewall: async (
      serverId: number,
      networkInterface: string,
      options?: FirewallSyncOptions,
    ) => {
      this.checkClassInitialized();
      return await enableServerFirewall(serverId, networkInterface, options);
    },
    retrieveFirewall: async (
      serverId: number,
      networkInterface: string,
      options?: FirewallSyncOptions,
    ) => {
      this.checkClassInitialized();
      return await retrieveServerFirewall(serverId, networkInterface, options);
    },
    applyFirewallRules: async (
      serverId: number,
      networkInterface: string,
      firewallRulesOptions: FirewallRulesOptions,
      options?: FirewallSyncOptions,
    ) => {
      this.checkClassInitialized();
      return await applyServerFirewallRules(
        serverId,
        networkInterface,
        firewallRulesOptions,
        options,
      );
    },
    addTrafficBlock: async (
      serverId: number,
      trafficBlockOptions: TrafficBlockOptions,
    ) => {
      this.checkClassInitialized();
      return await addServerTrafficBlock(serverId, trafficBlockOptions);
    },
    retrieveTrafficBlocks: async (serverId: number) => {
      this.checkClassInitialized();
      return await retrieveServerTrafficBlocks(serverId);
    },
    deleteTrafficBlock: async (
      serverId: number,
      blockId: number,
      trafficBlockOptions: TrafficBlockOptions,
    ) => {
      this.checkClassInitialized();
      return await deleteServerTrafficBlock(
        serverId,
        blockId,
        trafficBlockOptions,
      );
    },
    modifyTraffic: async (
      serverId: number,
      trafficOptions: ModifyTrafficOptions,
    ) => {
      this.checkClassInitialized();
      return await modifyServerTraffic(serverId, trafficOptions);
    },
    power: async (serverId: number, action: ServerPowerAction) => {
      this.checkClassInitialized();
      return await serverPower(serverId, action);
    },
  };

  users = {
    create: async (createOptions: CreateUserOptions) => {
      this.checkClassInitialized();
      return await createUser(createOptions);
    },
    retrieveByExtRelationId: async (
      extRelationId: string,
      options?: UserExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await retrieveUserByExtRelationId(extRelationId, options);
    },
    modifyByExtRelationId: async (
      extRelationId: string,
      modifyOptions: ModifyUserOptions,
      options?: UserExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await modifyUserByExtRelationId(
        extRelationId,
        modifyOptions,
        options,
      );
    },
    deleteByExtRelationId: async (
      extRelationId: string,
      options?: UserExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await deleteUserByExtRelationId(extRelationId, options);
    },
    resetPasswordByExtRelationId: async (
      extRelationId: string,
      options?: UserExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await resetUserPasswordByExtRelationId(extRelationId, options);
    },
    generateLoginTokensByExtRelationId: async (
      extRelationId: string,
      options?: UserExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await generateUserLoginTokensByExtRelationId(
        extRelationId,
        options,
      );
    },
    generateLoginTokensByServerId: async (
      extRelationId: string,
      serverId: number,
      options?: UserExtRelationOptions,
    ) => {
      this.checkClassInitialized();
      return await generateUserLoginTokensByServerId(
        extRelationId,
        serverId,
        options,
      );
    },
  };

  sshKeys = {
    add: async (addOptions: AddOptions) => {
      this.checkClassInitialized();
      return await addSshKey(addOptions);
    },
    retrieveUser: async (userId: number) => {
      this.checkClassInitialized();
      return await retrieveUserSshKeys(userId);
    },
    retrieve: async (sshKeyId: number) => {
      this.checkClassInitialized();
      return await retrieveSshKey(sshKeyId);
    },
    delete: async (sshKeyId: number) => {
      this.checkClassInitialized();
      return await deleteSshKey(sshKeyId);
    },
  };

  static init(options: { host: string; token: string; useHttps: boolean }) {
    if (VirtFusionV1.initialized) {
      throw new Error("VirtFusionV1 has already been initialized");
    }

    const { host, useHttps, token } = options;

    if (!host.trim() || !token.trim()) {
      throw new Error("Host is required");
    }
    if (!isString(host)) {
      throw new Error("Host must be a string");
    }
    if (!isBoolean(useHttps)) {
      throw new Error("Use HTTPS must be a boolean");
    }
    if (!isString(token)) {
      throw new Error("Token must be a string");
    }

    VirtFusionV1.host = host;
    VirtFusionV1.https = useHttps;
    VirtFusionV1.baseUrl = useHttps
      ? `https://${host}/api/v1`
      : `http://${host}/api/v1/`;
    VirtFusionV1.token = token;

    VirtFusionV1.initialized = true;

    return VirtFusionV1;
  }

  getValue(key: "host" | "https" | "baseUrl" | "token") {
    this.checkClassInitialized();

    return VirtFusionV1[key];
  }

  private checkClassInitialized() {
    if (!VirtFusionV1.initialized) {
      throw new Error("VirtFusionV1 is not initialized");
    }
  }
}
