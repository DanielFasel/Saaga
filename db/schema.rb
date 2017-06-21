# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170616133700) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_spec_school_admins", force: :cascade do |t|
    t.integer  "admin_spec_id"
    t.integer  "school_admin_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["admin_spec_id"], name: "index_admin_spec_school_admins_on_admin_spec_id", using: :btree
    t.index ["school_admin_id"], name: "index_admin_spec_school_admins_on_school_admin_id", using: :btree
  end

  create_table "admin_specs", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_admin_specs_on_user_id", using: :btree
  end

  create_table "school_admin_teacher_specs", force: :cascade do |t|
    t.integer  "school_admin_id"
    t.integer  "teacher_spec_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["school_admin_id"], name: "index_school_admin_teacher_specs_on_school_admin_id", using: :btree
    t.index ["teacher_spec_id"], name: "index_school_admin_teacher_specs_on_teacher_spec_id", using: :btree
  end

  create_table "school_admins", force: :cascade do |t|
    t.integer  "school_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["school_id"], name: "index_school_admins_on_school_id", using: :btree
  end

  create_table "school_student_student_specs", force: :cascade do |t|
    t.integer  "school_student_id"
    t.integer  "student_spec_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["school_student_id"], name: "index_school_student_student_specs_on_school_student_id", using: :btree
    t.index ["student_spec_id"], name: "index_school_student_student_specs_on_student_spec_id", using: :btree
  end

  create_table "school_students", force: :cascade do |t|
    t.integer  "school_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["school_id"], name: "index_school_students_on_school_id", using: :btree
  end

  create_table "school_teacher_teacher_specs", force: :cascade do |t|
    t.integer  "school_teacher_id"
    t.integer  "teacher_spec_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["school_teacher_id"], name: "index_school_teacher_teacher_specs_on_school_teacher_id", using: :btree
    t.index ["teacher_spec_id"], name: "index_school_teacher_teacher_specs_on_teacher_spec_id", using: :btree
  end

  create_table "school_teachers", force: :cascade do |t|
    t.integer  "school_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["school_id"], name: "index_school_teachers_on_school_id", using: :btree
  end

  create_table "schools", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_schools_on_name", using: :btree
  end

  create_table "student_specs", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_student_specs_on_user_id", using: :btree
  end

  create_table "teacher_specs", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_teacher_specs_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",               default: "", null: false
    t.string   "givenname",              default: "", null: false
    t.string   "familyname",             default: "", null: false
    t.string   "type",                   default: "", null: false
    t.string   "region",                 default: "", null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
