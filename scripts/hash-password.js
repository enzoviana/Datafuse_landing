const bcrypt = require('bcryptjs')

// Récupérer le mot de passe depuis les arguments
const password = process.argv[2]

if (!password) {
  console.log('❌ Erreur: Vous devez fournir un mot de passe')
  console.log('\n📖 Usage:')
  console.log('   node scripts/hash-password.js VotreMotDePasse')
  console.log('\n💡 Exemple:')
  console.log('   node scripts/hash-password.js admin123')
  process.exit(1)
}

// Générer le hash
const hash = bcrypt.hashSync(password, 10)

console.log('\n✅ Hash généré avec succès!\n')
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('📝 Mot de passe:', password)
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('🔐 Hash BCrypt:\n')
console.log(hash)
console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('\n📋 ÉTAPES SUIVANTES:')
console.log('1. Copiez le hash ci-dessus (toute la ligne qui commence par $2a$)')
console.log('2. Ouvrez Prisma Studio: npx prisma studio')
console.log('3. Allez dans la table "User"')
console.log('4. Cliquez sur "Add Record"')
console.log('5. Remplissez:')
console.log('   - email: admin@datafuse.com')
console.log('   - password: [COLLEZ LE HASH ICI]')
console.log('   - name: Admin')
console.log('   - role: admin')
console.log('6. Cliquez sur "Save 1 change"')
console.log('\n🚀 Vous pourrez ensuite vous connecter sur /admin/login')
console.log('   avec: admin@datafuse.com / ' + password)
console.log('\n')
