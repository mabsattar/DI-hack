import LancetNFT from 0xc3e6f27ffe0f6956
import Lancet from 0xc3e6f27ffe0f6956

pub contract UserProfileContract {

    // Define the LancetNFT Collection capability
    pub var lancetNFTCollectionCapability: @LancetNFT.Collection{LancetNFT.CollectionPublic}
    pub var lancetVaultCapability: @Lancet.Vault
    pub var address: Address
    pub var learningLanguage: String
    pub var speakingLanguage: String
    pub var username: String

    init(learningLanguage: String, speakingLanguage: String, username: String) {
        self.address = self.account.address
        self.lancetNFTCollectionCapability = getAccount(self.address)
            .getCapability<&LancetNFT.Collection{LancetNFT.CollectionPublic}>(
                /public/LancetNFTCollection
            )
            .borrow()
            ?? panic("Could not borrow LancetNFT Collection capability")

        self.lancetVaultCapability = getAccount(self.address)
            .getCapability<&Lancet.Vault{Lancet.Receiver}>(
                /public/Vault
            )
            .borrow()
            ?? panic("Could not borrow Lancet Vault capability")

        self.learningLanguage = learningLanguage
        self.speakingLanguage = speakingLanguage
        self.username = username
    }

    // Function to view the LancetNFTs owned by the user
    // pub fun viewOwnedNFTs(): {UInt64: LancetNFT.NFT} {
    //     return self.lancetNFTCollectionCapability.getIDs()
    // }
    pub fun viewOwnedNFTs(): [UInt64] {
        return self.lancetNFTCollectionCapability.getIDs()
    }

    // Function to view the Lancet balance of the user
    pub fun viewLancetBalance(): UFix64 {
        return self.lancetVaultCapability.balance
    }

    pub fun depositNFT(nft: &LancetNFT.NFT) {
        self.lancetNFTCollectionCapability.deposit(token: <-nft)
    }

    // Function to withdraw an NFT from the user's LancetNFT Collection
    pub fun withdrawNFT(id: UInt64): &LancetNFT.NFT {
        return self.lancetNFTCollectionCapability.withdraw(withdrawID: id)
    }

    // Function to get the IDs of NFTs in the user's LancetNFT Collection
    pub fun getNFTIDs(): [UInt64] {
        return self.lancetNFTCollectionCapability.getIDs()
    }

    // Function to deposit Lancet tokens to the user's LancetToken Vault
    pub fun deposit(amount: UFix64) {
        self.lancetVaultCapability.deposit(amount: amount)
    }

    // Function to withdraw Lancet tokens from the user's LancetToken Vault
    pub fun withdraw(amount: UFix64) {
        self.lancetVaultCapability.withdraw(amount: amount)
    }

    // Function to get the balance of Lancet tokens in the user's LancetToken Vault
    pub fun getLancetBalance(): UFix64 {
        return self.lancetVaultCapability.balance
    }

    pub fun getSpeakingLanguage(): String {
        return self.speakingLanguage
    }

    pub fun getLearningLanguage(): String {
        return self.learningLanguage
    }

    pub fun getUsername(): String {
        return self.username
    }
}
